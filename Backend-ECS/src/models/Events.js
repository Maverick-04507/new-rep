import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const participantSchema = new Schema({
    name: { type: String, required: true },
    scholar_ID: { type: String, required: true }, 
    email: { type: String, required: true },
    mobile_No: { type: String, required: true },
    teamName: { type: String, required: false },
    teamMembers: [{ 
        name: String, 
        scholar_ID: String, 
        email: String 
    }]
}, { timestamps: true });

const eventSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    participants: [participantSchema] 
}, { timestamps: true });

eventSchema.plugin(mongooseAggregatePaginate);

export const Event = mongoose.model("Event", eventSchema);
