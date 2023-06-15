import React from "react";

export default function QuizList({setState}) {
  const dummyQuizzes = [
    { quiz_number: 1, quiz_name: "ww2" },
    { quiz_number: 2, quiz_name: "cats" },
    { quiz_number: 3, quiz_name: "space" }
  ];

  function quizClick(e){
    e.preventDefault();
    setState("playingQuiz")
  }

  return (
    <div>
    <p>Pick your quz!</p>
      {dummyQuizzes.map((quiz) => (<button key={quiz.quiz_number} onClick={quizClick}>{quiz.quiz_name}</button>))}
  
    </div>
  )
}
