import React, { useEffect, useState } from "react";
import "../../style.css";
import apiURL from "../api";

export default function PreviousScores({userId}){
  const [overlay, setOverlay] = useState(false);
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
  }, [])

  async function getTopScores(){
    try {
      const res = await fetch(`${apiURL}/scores/${userId}`);
      const data = await res.json();

      console.log("scores", data);

      let sortedData = data.sort(function(a, b){ return b[1] - a[1] })
      let dataToDisplay = []
      for(let i = 0; i < sortedData.length; i++){
        console.log(sortedData[i]);
        try {
          const quiz = await fetch(`${apiURL}/quizzes/${(sortedData[i])[0]}`);
          const quizname = await quiz.text();
    
          dataToDisplay.push( {quizname: quizname, score: (sortedData[i])[1]})
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
    getTopScores(userId);
  };

  const handleClose = () => {
    setOverlay(false);
  };

  return (
    <div>
      <button onClick={handleOpen} className="overlay-button">
        View Previous Scores
      </button>
      {overlay && (
        <div className="overlay-container">
          <div className="overlay-content">
            <h2>Leaderboard</h2>
            <table className="leaderboard-table">
            
              <thead>
                <tr>
                  <th className="table-head">Rank</th>
                  <th className="table-head">Quiz</th>
                  <th className="table-head">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="position1">1</td>
                  <th className="position1">{topScores.length > 0 ? (topScores[0].quizname) : "N/A"}</th>
                  <td className="position1">{topScores.length > 0 ? (topScores[0].score) : "N/A"}</td>
                </tr>
                <tr>
                  <td className="position2">2</td>
                  <th className="position2">{topScores.length > 1 ? topScores[1].quizname : "N/A"}</th>
                  <td className="position2">{topScores.length > 1 ? topScores[1].score : "N/A"}</td>
                </tr>
                <tr>
                  <td className="position3">3</td>
                  <th className="position3">{topScores.length > 2 ? topScores[2].quizname : "N/A"}</th>
                  <td className="position3">{topScores.length > 2 ? topScores[2].score : "N/A"}</td>
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