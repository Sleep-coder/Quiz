// routes/topics.js
const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.get("/:topic/questions", questionController.getQuestionsByTopic);

module.exports = router;
