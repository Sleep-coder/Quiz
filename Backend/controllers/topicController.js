// controllers/topicController.js
const Question = require("../models/Question");

exports.getQuestionsByTopic = async (req, res) => {
  const { topicId } = req.params;
  try {
    const questions = await Question.find({ topic: topicId });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
