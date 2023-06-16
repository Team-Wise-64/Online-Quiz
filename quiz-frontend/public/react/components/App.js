import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import QuizList from "./QuizList";
import PlayingQuiz from "./PlayingQuiz";
import HomeIcon from '@mui/icons-material/Home';

import "../../style.css";
import apiURL from "../api"

export const App = () => {
  const [state, setState] = useState("landing");
  const [quizzes, setQuizzes] = useState([])
  console.log(state);
  const [id, setId] = useState(0);


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
      <HomeIcon color="primary" onClick={ () => {setState("landing")}} className="top-button">Home</HomeIcon>
      </div>

      {state === "landing" && <LandingPage setState={setState} />}

      {state === "pickingQuiz" && <QuizList  setState={setState} quizzes={quizzes} setId={setId}/>}


    { state === "playingQuiz"&& <PlayingQuiz setState={setState} id={id} setId={setId}/> }

    </main>
  );
};