import React from "react";

export default function QuizList() {
  const dummyQuizzes = [
    { quiz_number: 1, quiz_name: "ww2" },
    { quiz_number: 2, quiz_name: "cats" },
    { quiz_number: 3, quiz_name: "space" }
  ];

  return (
    <div>
    <p>Pick your quiz!</p>
      {dummyQuizzes.map((quiz) => (<button key={quiz.quiz_number}>{quiz.quiz_name}</button>))}
    </div>
  )
}
