import React, { useEffect, useState } from "react";
import "../../style.css";
import apiURL from "../api";

export default function Leaderboard(){
  const [overlay, setOverlay] = useState(false);
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    getTopScores();
  }, [])

  async function getTopScores(){
    try {
      const res = await fetch(`${apiURL}/scores`);
      const data = await res.json();

      let sortedData = data.sort(function(a, b){ return b.score - a.score })
      let dataToDisplay = []
      for(let i = 0; i < sortedData.length; i++){
        console.log(sortedData[i]);
        try {
          const quiz = await fetch(`${apiURL}/quizzes/${sortedData[i].quizId}`);
          const quizname = await quiz.text();
    
          const username = sortedData[i].user.username;
          //console.log({quiz_name: quizname, score: sortedData[i].score, username: username.username})
          dataToDisplay.push( {quizname: quizname, score: sortedData[i].score, username: username})
        } catch (error) {
          console.log(error)
        }
    }
      console.log("p",dataToDisplay);
      setTopScores(dataToDisplay);
      
    } catch (error) {
      console.log(error)
    }
    
    
  }


  const handleOpen = () => {
    setOverlay(true);
  };

  const handleClose = () => {
    setOverlay(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className="overlay-button">
        Leaderboard
      </button>
      {overlay && (
        <div className="overlay-container">
          <div className="overlay-content">
            <h2>Leaderboard</h2>
            <table className="leaderboard-table">
            
              <thead>
                <tr>
                  <th className="table-head">Rank</th>
                  <th className="table-head">Player</th>
                  <th className="table-head">Quiz</th>
                  <th className="table-head">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="position1">1</td>
                  <td className="position1">{topScores[0].username}</td>
                  <th className="position1">{topScores[0].quizname}</th>
                  <td className="position1">{topScores[0].score}</td>
                </tr>
                <tr>
                  <td className="position2">2</td>
                  <td className="position2">{topScores[1].username}</td>
                  <th className="position2">{topScores[1].quizname}</th>
                  <td className="position2">{topScores[1].score}</td>
                </tr>
                <tr>
                  <td className="position3">3</td>
                  <td className="position3">{topScores[2].username}</td>
                  <th className="position3">{topScores[2].quizname}</th>
                  <td className="position3">{topScores[2].score}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
      {overlay && <div className="overlay-background"></div>}
    </div>
  );
};