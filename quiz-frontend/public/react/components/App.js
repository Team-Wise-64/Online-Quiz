import React, { useState } from "react";
import LandingPage from "./LandingPage";
import AllQuiz from "./AllQuiz"
import '../../style.css';

export const App = () => {
  const [state, setState] = useState("landing");
  console.log(state)

  return (
    <main>
    { state === "landing" 
    &&
    <LandingPage 
    state={state}
    setState={setState}
    />
    }
    
    { state === "pickingQuiz" 
    &&
    <AllQuiz 
    state={state}
    setState={setState}
    />
    }
  </main>
  )
}