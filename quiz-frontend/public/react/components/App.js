import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import QuizList from "./QuizList";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';

import "../../style.css";
import apiURL from "../api"
import { Home } from "@mui/icons-material";

export const App = () => {
  const [state, setState] = useState("landing");
  const [quizzes, setQuizzes] = useState([])
  console.log(state);


  //Temporarily not working
  async function getQuizzes(){
    try{
    const res = await fetch(`${apiURL}/quizzes`)
    const data = await res.json();
    console.log(data);
    setQuizzes(data)
    return data;
    }
    catch(error){
      console.log(error);
    }
  }
  
  useEffect(() => { getQuizzes(); }, [])
  return (
    <main>
      <div className="top-bar">
      {/* <button onClick={ () => {setState("landing")}} className="top-button">Home</button> */}
      <HomeIcon color="primary" onClick={ () => {setState("landing")}} className="top-button">Home</HomeIcon>
      </div>

      {state === "landing" && <LandingPage state={state} setState={setState} />}

      {state === "pickingQuiz" && <QuizList state={state} setState={setState} quizzes={quizzes}/>}
    </main>
  );
};