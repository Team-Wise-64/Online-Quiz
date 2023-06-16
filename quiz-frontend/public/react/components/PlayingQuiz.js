import React, {useState, useEffect} from "react";
import apiURL from "../api";

export default function PlayingQuiz({id, setId}){
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [idx, setIdx] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);
  const [showEnd, setShowEnd] = useState(false);
  const [timer, setTimer] = useState(5);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

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
    }, 6000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {}, [currentAnswers,currentQuestion,timer]);

  async function getQuestion(){
    try{
      const response = await fetch(`${apiURL}/quizzes/${id}/questions/${idx}`);
      const data = await response.json();
      setCurrentQuestion(data);
    }catch(err){
      console.error(err);
    }
  }

  async function getAnswer(){
    try{
      const response = await fetch(`${apiURL}/quizzes/${id}/questions/${idx}/answer`);
      const data = await response.json();
      setCurrentAnswers(data[0]);
    }catch(err){
      console.error(err);
    }
  }

  function setNextQuestion(chosenOption){
    if(idx < 10){
        setIdx(idx + 1);
        getAnswer();
        getQuestion();



        console.log("option", chosenOption);
        console.log('answer', currentAnswers[4]);

        if(chosenOption == currentAnswers[4]){

            setScore(score + 1)
       }
       

       setTimer(5);
       setShowQuestion(true);
    }else{
        setShowAnswer(false)
        setShowEnd(true)
        setShowScore(false);
    }
    
  }

  return(
    <>
    {/* These are the stats */}
    <div> 
    {showScore && <p className="score">Score: {score}</p>}
    {showScore && <p className="timer">Timer:</p>}
    </div>
    
    {/* Pre question */}
    <div>
    {showQuestion && <h1>{currentQuestion}</h1>}
    {showQuestion && <h1>{timer}</h1>}
    </div>

    {/* Question and answers */}
    <div>
    {showAnswer && <p>{idx}: {currentQuestion}</p>}
    {showAnswer && <button className="cartoon-btn" onClick={() => {setNextQuestion(currentAnswers[0])}}>A: {currentAnswers[0]}</button>}
    {showAnswer && <button className="cartoon-btn" onClick={() => {setNextQuestion(currentAnswers[1])}}>B: {currentAnswers[1]}</button>}
    {showAnswer && <button className="cartoon-btn" onClick={() => {setNextQuestion(currentAnswers[2])}}>C: {currentAnswers[2]}</button>}
    {showAnswer && <button className="cartoon-btn" onClick={() => {setNextQuestion(currentAnswers[3])}}>D: {currentAnswers[3]}</button>} 
    </div>

    <div>
        {showEnd && <p>You have reached end of quiz</p>}
        {showEnd && <p className="score">Score: {score}</p>}
    </div>
    </>
  );
}