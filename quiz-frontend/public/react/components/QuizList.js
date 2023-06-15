import React from "react";

export default function QuizList({ setState, quizzes }) {
  function handleClick(e) {
    e.preventDefault();
    setState("landing");
  }

  return (
    <div className="quiz-container">
      <h1>Pick your Quiz!</h1>
      {quizzes.map((quiz, index) => (
        <button key={index} className="cartoon-btn">
          {quiz.quizName}
        </button>
      ))}
    </div>
  );
}
