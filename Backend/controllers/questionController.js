// controllers/questionController.js
const Question = require("../models/Question");

exports.getQuestionsByTopic = async (req, res) => {
  const { topic } = req.params;
  try {
    const questions = await Question.find({ topic });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
