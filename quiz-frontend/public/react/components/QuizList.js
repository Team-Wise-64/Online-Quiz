import React from "react";

export default function QuizList({ setState, quizzes, setId}) {



  return (
    <div className="quiz-container">
      <h1>Pick your Quiz!</h1>
      {quizzes.map((quiz, index) => (
        <button key={index} className="cartoon-btn" onClick={(e) => {
          e.preventDefault();
          console.log("quiz", quiz)
          console.log("id", quiz.quizId)
          setId(quiz.quizId)
          setState("playingQuiz")
    
          }}>
          {quiz.quizName}
        </button>
      ))}
    </div>
  );
}
