import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        fullName: "",
        email: "",
        scholar_ID: "",
        Mobile_No: "",
        password: "",
        confirmPassword: "", // Add confirmPassword to track re-entered password
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match. Please try again.");
            return;
        }

        try {
            const res = await fetch("https://ecs-website.onrender.com/api/v1/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.username,
                    fullName: formData.fullName,
                    email: formData.email,
                    scholar_ID: formData.scholar_ID,
                    Mobile_No: formData.Mobile_No,
                    password: formData.password,
                }),
            });

            if (!res.ok) {
                const errorText = await res.text();
                throw new Error(`Error: ${res.status} - ${errorText}`);
            }

            const data = await res.json();
            console.log("Registration successful:", data);
            setSuccess(true);

            // Reset form fields
            setFormData({
                username: "",
                fullName: "",
                email: "",
                scholar_ID: "",
                Mobile_No: "",
                password: "",
                confirmPassword: "",
            });

            navigate("/sign-in");
        } catch (error) {
            console.error("Error during registration:", error);
            setError(error.message);
        }
    };

    return (
        <div className="mb-5 ">
            <div className="pt-16">

           
            <h1 className="text-3xl text-center p-3 mt-0 ">Sign Up</h1>

            {error && (
                <div className="text-red-600 text-center mt-2">
                    {error}
                </div>
            )}
            {success && (
                <div className="text-green-600 text-center mt-2">
                    Registration successful!
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-4 text-black w-1/2 mx-auto"
            >
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                />
                <input
                    id="scholar_ID"
                    type="text"
                    placeholder="Scholar ID"
                    value={formData.scholar_ID}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    maxLength={7}
                    minLength={7}
                />
                <input
                    id="Mobile_No"
                    type="number"
                    placeholder="Mobile No"
                    value={formData.Mobile_No}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    minLength={10}
                    maxLength={10}
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    minLength={8}
                />
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Re-Enter Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="p-2 border border-gray-300 rounded"
                    minLength={8}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Sign Up
                </button>
                <p className="text-center pt-4 text-white">Already have an Account <a href="/sign-in" className="text-blue-400">Sign-In</a></p>
            </form>
        </div>
        </div>
    );
}

export default Signup;
