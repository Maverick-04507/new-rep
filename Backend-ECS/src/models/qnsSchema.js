import mongoose from "mongoose";

const { Schema } = mongoose;

const questionModel = new Schema({
    questionText: {
        type: String,
        required: true,
    },
    questionType: {
        type: String,
        enum: ['text', 'image', 'audio'],
        required: true,
        default: 'text'
    },
    mediaUrl: {  // Will store hardcoded paths for image/audio questions
        type: String,
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