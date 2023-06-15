import React, { useState } from "react";
import LandingPage from "./LandingPage";
import AllQuiz from "./AllQuiz"
import PlayingQuiz from "./PlayQuiz";
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

    { state === "playingQuiz"
    &&
    <PlayingQuiz 
    state={state}
    setState={setState}
    />
    }
  </main>
  )
}