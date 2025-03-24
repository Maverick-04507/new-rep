import mongoose from "mongoose";

const { Schema } = mongoose;

// Result Model
const resultSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    answers: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Question",
                required: true,
            },
            userAnswer: {
                type: String,
                required: true,
                trim: true,
                lowercase: true, // Store in lowercase to match answers
            },
            isCorrect: {
                type: Boolean,
                required: true,
            },
        }
    ],
    attempts: {
        type: Number,
        default: 0,
    },
    points: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: () => new Date(Date.now() + 5.5 * 60 * 60 * 1000), // GMT+5:30
    }
});

export default mongoose.model("Result", resultSchema);
