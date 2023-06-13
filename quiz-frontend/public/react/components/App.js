import React, { useState } from "react";
import Landing from "./LandingPage";
import QuizList from "./LandingPage"
import '../../style.css';

export const App = () => {
  const [state, setState] = useState("landing");
  console.log(state)

  if (state === "landing"){
    return(
      <Landing 
      setState={setState}
      />
    )
  }
  else {
    return(
      <QuizList />
    )
  }

};

