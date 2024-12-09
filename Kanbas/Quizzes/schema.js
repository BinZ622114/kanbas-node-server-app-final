import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema({
    title: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    points: Number,
    published: Boolean,
    startDate: String,
    dueDate: String,
    untilDate: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestion: Boolean,
    webcamRequired: Boolean,
    lockQuestion: Boolean,
    assignTo: String,
    quizType: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz",
    },
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Projects"],
        default: "Quizzes",
    },
},
    { collection: "quizzes" }
);
export default quizzesSchema;