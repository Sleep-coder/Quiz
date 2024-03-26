// components/DisplayQuestion.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayQuestion({ match }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/topics/${match.params.topic}/questions`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, [match.params.topic]);

  const handleAnswerChange = (questionId, answerIndex) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/submitquiz",
        { answers }
      );
      setScore(response.data.score);
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  return (
    <div>
      <h2>Quiz Questions</h2>
      {questions.map((question) => (
        <div key={question._id}>
          <p>{question.questionText}</p>
          {question.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`${question._id}-${index}`}
                name={`${question._id}`}
                value={index}
                checked={answers[question._id] === index}
                onChange={() => handleAnswerChange(question._id, index)}
              />
              <label htmlFor={`${question._id}-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
      {score !== null && <p>Your score: {score}</p>}
    </div>
  );
}

export default DisplayQuestion;
