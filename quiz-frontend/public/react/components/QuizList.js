import React from "react";
import Button from "@mui/material/Button";

export default function QuizList({ state, setState, quizzes }) {
  function handleClick(e) {
    e.preventDefault();
    setState("landing");
  }

  // const dummyQuizzes = [
  //   { quiz_number: 1, quiz_name: "ww2" },
  //   { quiz_number: 2, quiz_name: "cats" },
  //   { quiz_number: 3, quiz_name: "space" },
  // ];

  return (
    <div className="quiz-container">
      <h1>Pick your Quiz!</h1>
      {/* {dummyQuizzes.map((quiz) => ( */}
      {quizzes.map((quiz, index) => (
        // <Button
        //   key={index}
        //   className="each-quiz"
        //   variant="contained"
        //   color="secondary"
        // >
        //   {quiz.quizName}
        // </Button>
        <button key={index} className="cartoon-btn">
          {quiz.quizName}
        </button>
      ))}
    </div>
  );
}
