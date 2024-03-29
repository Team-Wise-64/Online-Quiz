import React, { useState, useEffect } from "react";
import apiURL from "../api";

const MAX_TIME = 15;
const NUM_QUESTIONS = 10;

export default function PlayingQuiz({ id, setState, userId }) {
  const [idx, setIdx] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [currentOptions, setCurrentOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [numOfQ, setNumOfQ] = useState(0);

  // timer state
  const [timer, setTimer] = useState(MAX_TIME);
  const [timerId, setTimerId] = useState(null);

  // ui state
  const [showOptions, setShowOptions] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  //set number of questions 
  useEffect(() => {
    getQuestionsLength();
  },[numOfQ])

  // whenever the idx changes, get the next question
  useEffect(() => {
    nextQuestion();
  }, [idx]);

  // watch the timer and update accordingly:
  useEffect(() => {
    // show the options after 5s
    if (timer < 11) setShowOptions(true);

    // time is up, move on!
    if (timer < 0) setIdx(idx + 1);
  }, [timer]);

  async function nextQuestion() {
    // end the quiz when no more questions left
    if (idx > NUM_QUESTIONS) return finishQuiz();

    // otherwise, set the next question up
    setShowOptions(false);
    await getQuestion();
    await getAnswer();
    restartTimer();
  }

  // make this async when using fetch
  async function getQuestion() {
    try {
      const response = await fetch(`${apiURL}/quizzes/${id}/questions/${idx}`);
      const data = await response.json();
      setCurrentQuestion(data);
    } catch (err) {
      console.error(err);
    }
  }

  // make this async when using fetch
  async function getAnswer() {
    try {
      const response = await fetch(
        `${apiURL}/quizzes/${id}/questions/${idx}/answer`
      );
      const data = (await response.json())[0];
      setCurrentOptions(shuffle(data?.slice(0, -1)));
      setCurrentAnswer(data?.at(-1));
    } catch (err) {
      console.error(err);
    }
  }


  function shuffle(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  // when the user clicks an answer:
  function checkAndProceed(i) {
    if (currentOptions[i] == currentAnswer) {
      setScore(score + timer * 100);
    }
    setIdx(idx + 1);
  }

  // all the timer logic in one place
  function restartTimer() {
    clearInterval(timerId);
    setTimer(MAX_TIME);
    const newInterval = setInterval(() => setTimer((t) => t - 1), 1000);
    setTimerId(newInterval);
  }

  function finishQuiz() {
    clearInterval(timerId);
    setShowEnd(true);
    saveScore()
  }

  async function saveScore(){
    if(userId !== null){
    try {
      const res = fetch(`${apiURL}/scores`, {
        method: "POST",
        headers: {'Content-Type' : "application/json"},
        body: JSON.stringify(
          {
            "quizId": id, 
            "score": score, 
            "user": {
              "userId": userId
            }
          }
          )
      })
    } catch (error) {
      console.log(error)
    }
  }
  }

  async function getQuestionsLength(){
    try {
      const response = await fetch(
        `${apiURL}/quizzes/${id}/questions`
      );
      const length = (await response.json()).length;
      console.log(length);
      setNumOfQ(length);
      return length
  }catch(error){
    console.log(error);
  }
  }


  function handleClick(e) {
    e.preventDefault();
    setState("pickingQuiz");
  }

  return showEnd ? (
    <>
      <main>
        <h1>End</h1>
        <h2>Your score is {score}</h2>
        <button className="back-button" onClick={handleClick}>Back to Quizzes</button>
      </main>
    </>
  ) : (
    <>
      <main>
        <h2>
          Question {idx} <span className="question-number"> / {numOfQ} </span>| Time:{timer} | Score:{score}
        </h2>
        {showOptions ? (
            <p className="current-question">{currentQuestion}</p>
        ) : (
          <div>
          <h1 className="current-question2">{currentQuestion}</h1>
          <p className="temp-timer">{timer-10}</p>
          </div>
        )}
        <ul className="grid">
          {showOptions &&
            currentOptions?.map((option, i) => (
              <li key={i} className="list">
                <span className="answer-button-pushable" role="button">
                  <span className="answer-button-shadow"></span>
                  <span className="answer-button-edge"></span>
                  <button
                    onClick={() => checkAndProceed(i)}
                    className="answer-button-front text"
                  >
                    {option}
                  </button>
                </span>
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
