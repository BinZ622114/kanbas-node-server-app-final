import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
    title: String,
    description: String,
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizzesModel" },
    points: Number,
    questionType: {
        type: String,
        enum: ["Multiple Choice", "True/Flase", "Fill Blank"],
        default: "Multiple Choice",
    },
    multipleChoiceAnswer: [String],
    trueFlaseAnswer: Boolean,
    fillBlankAnswer: [String]
},
    { collection: "questions" }
);

export default questionSchema;