import React from "react";
import Button from "@mui/material/Button";

export default function QuizList({ setState }) {
  function handleClick(e) {
    e.preventDefault();
    setState("landing");
  }

  const dummyQuizzes = [
    { quiz_number: 1, quiz_name: "ww2" },
    { quiz_number: 2, quiz_name: "cats" },
    { quiz_number: 3, quiz_name: "space" },
  ];

  return (
    <div className="quiz-container">
      <p>Pick your Quiz!</p>
      {dummyQuizzes.map((quiz) => (
        <Button
          key={quiz.quiz_number}
          className="each-quiz"
          variant="contained"
          color="secondary"
        >
          {quiz.quiz_name}
        </Button>
      ))}
    </div>
  );
}
