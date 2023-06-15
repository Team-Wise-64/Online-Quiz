import React from "react";
import ButtonWithOverlay from "./ButtonWithOverlay"

export default LandingPage = ({ setState }) => {
  function handleClick(e) {
    e.preventDefault();
    setState("pickingQuiz");
  }
  return (
    <div className="App-header">
      <p>Welcome to the Quiz Nexus</p>
      <button className="Play-btn" onClick={handleClick}>
        Play
      </button>
      <ButtonWithOverlay />
    </div>
  );
};
