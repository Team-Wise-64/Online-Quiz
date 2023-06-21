import React from "react";
import Leaderboard from "./Leaderboard";
import PreviousScores from "./PreviousScores";

export default LandingPage = ({ setState, userId}) => {
  function handleClick(e) {
    e.preventDefault();
    console.log(userId)
    setState("pickingQuiz");
  }
  return (
    <>
      <main>
        <div className="App-header">
          <p>Welcome to the Quiz Nexus</p>

          <button className="Play-btn" onClick={handleClick}>
            Play
          </button>
          <Leaderboard />
          {userId !== null && <PreviousScores userId={userId}/>}
          {/* <button
            className="add-button"
            onClick={() => {
              setState("adding");
            }}
          >
            Add a quiz!
          </button> */}
        </div>
      </main>
    </>
  );
};
