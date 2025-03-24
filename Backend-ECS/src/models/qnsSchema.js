import mongoose from "mongoose";

const { Schema } = mongoose;


const questionModel = new Schema({
    question: {
        type: String,
        required: true,  
    },
    answer: {
        type: String,
        required: true,  
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model("Question", questionModel);
