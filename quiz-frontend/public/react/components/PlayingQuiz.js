import React, { useState, useEffect } from "react";
import apiURL from "../api";

export default function PlayingQuiz({ setState, id, currentUserId }) {
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [idx, setIdx] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);
  const [showEnd, setShowEnd] = useState(false);
  const [timer, setTimer] = useState(5);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questionTimer, setQuestionTimer] = useState(15);

  useEffect(() => {
    getQuestion();
    getAnswer();

    const countdown = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdown);
      setShowAnswer(true);
      setShowQuestion(false);
      setShowScore(true);
      setQuestionTimer(15)
    }, 6000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    const timerCountdown = setInterval(() => {
      setQuestionTimer((previousTimer) => previousTimer - 1);
    }, 1000);

    if (questionTimer === 0) {
      clearInterval(timerCountdown);
      setNextQuestion();
    }

    return () => clearInterval(timerCountdown);
  }, [questionTimer]);

  useEffect(() => {}, [currentAnswers, currentQuestion, timer]);

  async function getQuestion() {
    try {
      const response = await fetch(`${apiURL}/quizzes/${id}/questions/${idx}`);
      const data = await response.json();
      setCurrentQuestion(data[0]);
    } catch (err) {
      console.error(err);
    }
  }

  async function getAnswer() {
    try {
      const response = await fetch(
        `${apiURL}/quizzes/${id}/questions/${idx}/answer`
      );
      const data = await response.json();
      setCurrentAnswers(data[0]);
    } catch (err) {
      console.error(err);
    }
  }

  async function saveScore(){
    try {
      const res = await fetch(`${apiURL}/scores`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: {quiz_id: id, score: score, user_id: currentUserId}
      })
      
      const data = res.json();
    } catch (error) {
      
    }
      
  }

  async function setNextQuestion(chosenOption){

     console.log(idx);

    if (chosenOption === currentAnswers[4]) {
      const timeLeftScore = Math.round(questionTimer * 66.6);
      setScore(score + timeLeftScore);
    }

    if(idx < 10){
       setIdx(idx + 1);
       await getAnswer();
       await getQuestion();

       setQuestionTimer(15);
       setTimer(5);
       setShowQuestion(false);
    }else{
        setShowAnswer(false)
        setShowEnd(true)
        setShowScore(false);

        saveScore(); //add score to database
    }

    
    
  }

  return (
    <>
      {/* These are the stats */}
      <div>
        {showScore && <p className="score">Score: {score}</p>}
        {showScore && <p className="timer">Timer: {questionTimer}</p>}
      </div>

      {/* Pre question */}
      <div>
        {showQuestion && <h1>{currentQuestion}</h1>}
        {showQuestion && <h1>{timer}</h1>}
      </div>

      {/* Question and answers */}
      <div>
        {showAnswer && (
          <p>
            {idx}: {currentQuestion}
          </p>
        )}
        {showAnswer && (
          <button
            className="cartoon-btn"
            onClick={() => {
              setNextQuestion(currentAnswers[0]);
            }}
          >
            A: {currentAnswers[0]}
          </button>
        )}
        {showAnswer && (
          <button
            className="cartoon-btn"
            onClick={() => {
              setNextQuestion(currentAnswers[1]);
            }}
          >
            B: {currentAnswers[1]}
          </button>
        )}
        {showAnswer && (
          <button
            className="cartoon-btn"
            onClick={() => {
              setNextQuestion(currentAnswers[2]);
            }}
          >
            C: {currentAnswers[2]}
          </button>
        )}
        {showAnswer && (
          <button
            className="cartoon-btn"
            onClick={() => {
              setNextQuestion(currentAnswers[3]);
            }}
          >
            D: {currentAnswers[3]}
          </button>
        )}
      </div>

      <div>
        {showEnd && <p>You have reached the end of the quiz</p>}
        {showEnd && <p className="score">Score: {score}</p>}
      </div>
    </>
  );
}
