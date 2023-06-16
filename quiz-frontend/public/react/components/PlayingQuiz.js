import React, {useState, useEffect} from "react";
import apiURL from "../api";

export default function PlayingQuiz({id}){
    const [currentQuestion, setCurrentQuestion] = useState([]);
    const [currentAnswers, setCurrentAnswers] = useState([]);
    const [idx, setIdx] = useState(1);
    const [showAnswer, setShowAnswer] = useState(false);
    const [showQuestion, setShowQuestion] = useState(true);
    const [timer, setTimer] = useState(3);
  
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
      }, 4000);
  
      return () => clearInterval(countdown);
    }, []);
  
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
  
    function setNextQuestion(){
        setId(id + 1);
        setIdx(idx + 1);
        getAnswer();
        getQuestion();
    }

    return(
        <>
        {showQuestion && <h1>{currentQuestion}</h1>}
        {showQuestion && <h1>{timer}</h1>}
        {showAnswer && <p>{idx}: {currentQuestion}</p>}
        {console.log(id)}
        {console.log(idx)}
        {showAnswer && <button className="cartoon-btn" onClick={setNextQuestion}>A: {currentAnswers[0]}</button>}
        {showAnswer && <button className="cartoon-btn" onClick={setNextQuestion}>B: {currentAnswers[1]}</button>}
        {showAnswer && <button className="cartoon-btn" onClick={setNextQuestion}>C: {currentAnswers[2]}</button>}
        {showAnswer && <button className="cartoon-btn" onClick={setNextQuestion}>D: {currentAnswers[3]}</button>}
        </>
    );
}