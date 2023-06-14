import React, { useState } from "react";
import LandingPage from "./LandingPage";
import AllQuiz from "./AllQuiz";
import Button from "@mui/material/Button";
// import HomeIcon from '@mui/icons-material/Home';

import "../../style.css";
import apiURL from "../api"
import { Home } from "@mui/icons-material";

export const App = () => {
  const [state, setState] = useState("landing");
  console.log(state);


  // Temporarily not working
  // async function getQuizzes(){
  //   const res = await fetch(`${apiURL}/quizzes`)
  //   const data = await res.json()
  //   console.log(data)
  // }
  // getQuizzes()

  return (
    <main>
      <div className="top-bar">
      <button onClick={ () => {setState("landing")}} className="top-button">Home</button>
      </div>

      {state === "landing" && <LandingPage state={state} setState={setState} />}

      {state === "pickingQuiz" && <AllQuiz state={state} setState={setState} />}
    </main>
  );
};