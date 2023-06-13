import React from "react";

export default LandingPage = ({ state, setState }) => {

  function handleClick(e) {
    e.preventDefault();
    setState("pickingQuiz");
  }
  return (
    <div className="App-header">
      <p>Welcome to the quiz</p>
      <button className="Play-btn" onClick={handleClick}>Play</button>
    </div>
  )

};