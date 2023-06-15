import React from "react";

export default function QuizList({ setState, quizzes }) {
  function handleClick(e) {
    e.preventDefault();
    setState("landing");
  }


  function quizClick(e){
    e.preventDefault();
    setState("playingQuiz")
  }

  // const dummyQuizzes = [
  //   { quiz_number: 1, quiz_name: "ww2" },
  //   { quiz_number: 2, quiz_name: "cats" },
  //   { quiz_number: 3, quiz_name: "space" },
  // ];

  return (
    <div className="quiz-container">
      <h1>Pick your Quiz!</h1>
      {quizzes.map((quiz, index) => (
        <button key={index} className="cartoon-btn" onClick={quizClick}>
          {quiz.quizName}
        </button>
      ))}
    </div>
  );
}
