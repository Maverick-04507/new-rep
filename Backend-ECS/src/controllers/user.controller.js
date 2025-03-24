

import { asyncHandler } from "../utils/asyncHandler.js";
import {APIError} from "../utils/APIError.js";
import { User } from "../models/student.js";
import { Event } from "../models/Events.js";
import { uploadOnCloudinary ,deleteFromCloudinary } from "../utils/cloudiary.js";
import { APIResponse } from "../utils/APIResponse.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()
const generateAccessAndRefreshToken=async(userId)=>{
    try {
        const user= await User.findById(userId)
        if(!user){
    
        }
    
        const accessToken=user.generateAccessToken()
        const refreshToken=user.generateRefreshToken()
    
        user.refreshToken=refreshToken
        await user.save({validateBeforeSave:false})
        return {accessToken,refreshToken}
    
    } catch (error) {
        throw new APIError(500,"Something went wrong while generating refresh and access tokens")
    }
}

const registerUser= asyncHandler(async(req,res)=>{
    const {username,fullName,email,scholar_ID,Mobile_No,password}=req.body

    //Validation
    if(
        [username,fullName,email,scholar_ID,Mobile_No,password].some((field)=>field?.trim()==="")
    ){
        throw new APIError(400,"All fields are required")
    }

    const existingUser= await User.findOne({
        $or:[{email},{scholar_ID}]
    })
    if(existingUser){
        throw new APIError(409,"User with the given scholar ID or email already exists")
    }
    // const avatarloaclPath=req.files?.avatar?.[0]?.path

    // if(!avatarloaclPath){
    //     throw new APIError(400,"Avatar File is missing")
    // }

// let avatar;

// try {
//     avatar = await uploadOnCloudinary(avatarloaclPath);
//     console.log("Avatar Upload Successful", avatar);
// } catch (error) {
//     console.error("Error Uploading Avatar", error);
//     throw new APIError(500, "Failed to Upload Avatar");
// }

try {
    const user = await User.create({
        fullName,
        avatar: '', 
        username,
        email,
        scholar_ID,
        Mobile_No,
        password,
    });

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if (!createdUser) {
        throw new APIError(400, "Registration failed.....Something went wrong");
    }

    return res
        .status(201)
        
        .json(new APIResponse(200, createdUser, "User Registered Successfully"));

} catch (error) {
    console.error("User Creation Failed:", error);

    // if (avatar) {
    //     await deleteFromCloudinary(avatar.public_id);
    // }

    throw new APIError(400, "Something went wrong.......Registration failed!");
}
})

const loginUser=asyncHandler(async(req,res)=>{
    const {email,scholar_ID,password}=req.body
    if(!email){
        throw new APIError(400,"Email is Required")
    }
    if(!scholar_ID){
        throw new APIError(400,"scholar_ID is Required")
    }
    const user= await User.findOne({
        $or:[{email},{scholar_ID}]
    })
    if(!user){
        throw new APIError(404,"User not found")
    }

    //validating if password is correct or not
    const isValid=await user.isPasswordCorrect(password)
    if(!isValid){
        throw new APIError(401,"Invalid User Credentials")
    }

    const {accessToken,refreshToken}=await generateAccessAndRefreshToken(user._id)

    const loggedInUser= await User.findById(user._id)
    .select("-password -refreshToken");
    if(!loggedInUser){
        throw new APIError(400,"No logged In user found")
    }
    const options={
        httpOnly: true,
        secure:process.env.NODE_ENV==='production',
    }
     return res
     .status(200)
     .cookie("accessToken",accessToken,options)
     .cookie("refreshToken",refreshToken,options)
     .json(new APIResponse(
        200,
        {user:loggedInUser,accessToken,refreshToken},
        "User Logged In Successfuly"
    ))


})

const refreshAccessToken= asyncHandler(async(req,res)=>{
    const incomingRefreshToken=req.cookies.refreshToken
    if(!incomingRefreshToken){
        throw new APIError(401,"Refresh Token is required")
    }

    try {
       const decodedToken=  jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
        const user=await User.findById(decodedToken?._id)
        if(!user){
            throw new APIError(401,"Invalid Refresh Token")
        }

        if(incomingRefreshToken!==user?.refreshToken){
            throw new APIError(401,"Invalid refresh token")
        }

        const options={
            httpOnly: true,
            secure:process.env.NODE_ENV==='production',
        }

        const {accessToken,newRefreshToken}=await generateAccessAndRefreshToken(user._id)
        return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",newRefreshToken,options)
        .json(new APIResponse(
            200,{
            accessToken,
            refreshToken:newRefreshToken
        },
            "Access Token Refreshed Successfully"
        ))




    } catch (error) {
        throw new APIError(500,"Something went wrong while refreshing access token")
    }

})

const logoutuser=asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken: undefined,
            }
        },
        {new:true}
    )
    const options={
        httpOnly: true,
        secure:process.env.NODE_ENV==='production',
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new APIResponse(200,{},"User Logged Out Successfully"))
    
})

const changeCurrentPassword=asyncHandler(async(req,res)=>
{
    const{oldPassword,newPassword}=req.body
    const user= await User.findById(req.user?._id)
    const isValid=await user.isPasswordCorrect(oldPassword)
    if(!isValid){
        throw new APIError(401,"Invalid Password Entered")
    }

    user.password=newPassword
    await user.save({validateBeforeSave:false})

    return res.status(200).json(new APIResponse(200,{},"Password Updated Successfully"))

})

const updateAccountDetails=asyncHandler(async(req,res)=>{
    const {fullName,email,username}=req.body

    if(!fullName || !email || !username){
        throw new APIError(401,"Name Email & Username are Required")
    }

   const user= await  User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                fullName,
                email:email,
                username
            }
        },{
            new:true
        }
    ).select("-password -refreshToken")

    return res
    .status(200)
    .json(new APIResponse(200,user,"Account Details Updated successfully"))
})

const updateAvatar=asyncHandler(async(req,res)=>
    {
        const avatarloaclPath=req.file?.path
        if(!avatarloaclPath){
            throw new APIError(400,"File is required")
        }

        const avatar= await uploadOnCloudinary(avatarloaclPath)

        if(!avatar.url){
            throw new APIError(500,"Something went wrong")
        }
       
       const user= await User.findByIdAndUpdate(
            req.user?._id,
            {
                $set:
                {
                    avatar:avatar.url
                }
            },{new:true}
        ).select("-password -refreshToken")

        return res
        .status(200)
        .json(new APIResponse(200,user,"Avatar Updated Successfully"))
        

})

const dashboard=asyncHandler(async(req,res)=>{
    return res.status(200).json(new APIResponse(200, req.user,"Current User Details"))
})

const createEvent = asyncHandler(async (req, res) => {
    try {
        const { name, type } = req.body;

        // Check if the event already exists
        const existingEvent = await Event.findOne({ name });
        if (existingEvent) {
            return res.status(400).json({ message: "Event already exists" });
        }

        const newEvent = new Event({ name, type, participants: [] });
        await newEvent.save();

        return res.status(201).json({ message: "Event created successfully", event: newEvent });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


const registerForEvent = asyncHandler(async (req, res) => {
    try {
        const { eventId, studentId, teamName, teamMembers } = req.body;

        // Find the student
        const student = await User.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        // Find the event
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        // Check if student is already registered
        const isAlreadyRegistered = event.participants.some(p => p.email === student.email);
        if (isAlreadyRegistered) {
            return res.status(400).json({ message: "You are already registered for this event" });
        }

        // Create new participant object
        const newParticipant = {
            name: student.fullName,
            scholar_ID: student.scholar_ID,
            email: student.email,
            mobile_No: student.Mobile_No,
            teamName: teamName || null, // Optional
            teamMembers: teamMembers || [] // Optional
        };

        // Add participant to the event
        event.participants.push(newParticipant);
        await event.save();

        // Add event to student's profile
        student.eventsRegistered.push(eventId);
        await student.save();

        return res.status(201).json({ message: "Registration successful", event, student });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

export{
    registerUser,
    loginUser,
    refreshAccessToken,
    logoutuser,
    changeCurrentPassword,
    updateAvatar,
    updateAccountDetails,
    dashboard,
    createEvent,
    registerForEvent,
}