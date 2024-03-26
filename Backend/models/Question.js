// models/Question.js
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  topic: { type: mongoose.Schema.Types.ObjectId, ref: "Topic", required: true },
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOptionIndex: { type: Number, required: true },
});

module.exports = mongoose.model("Question", questionSchema);
