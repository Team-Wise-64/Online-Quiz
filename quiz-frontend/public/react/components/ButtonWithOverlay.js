import React, { useEffect, useState } from "react";
import "../../style.css";
import apiURL from "../api";

export default function ButtonWithOverlay(){
  const [overlay, setOverlay] = useState(false);
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    getTopScores();
  }, [])

  async function getTopScores(){
    try {
      const res = await fetch(`${apiURL}/scores`);
      const data = await res.json();
      console.log(data);

      
      //setTopScores(data);
      //let sortedData = sortScores(data);
      //console.log("data", sortedData);

      let dataToDisplay = [];
      for(let i = 0; i < data.length; i++){
        console.log(data[i])
        dataToDisplay.push(getQuizandPlayerName(
        data[i].quizId, 
        data[i].score, 
        data[i].userId
       ))
    }
      console.log(dataToDisplay);
      setTopScores(dataToDisplay);
      console.log(topScores);
    } catch (error) {
      console.log(error)
    }
    
    
  }

  function sortScores(data){
    let sortedData = data.sort(function(a, b){ return a.score - b.score })
    let dataToDisplay = []
    for(let i = 0; i < sortedData.length; i++){
      dataToDisplay.push(getQuizandPlayerName(
        sortedData[i].quizId, 
        sortedData[i].score, 
        sortedData[i].userId
        ))
    }
    console.log(dataToDisplay);
    return dataToDisplay;

  }

  async function getQuizandPlayerName(quiz_id, user_id, score){
    try {
      console.log("ghelloekga")
      const quiz = await fetch(`${apiURL}/quizzes/${quiz_id}`);
      const quizname = JSON.stringify(quiz);
      console.log('a', quizname);

      const user = await fetch(`${apiURL}/users/${user_id}`);
      const username = user.json;
      console.log(username);
      return {quiz_name: quizname, score: score, username: username}
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
{/*             
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
              </tbody> */}
            </table>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
      {overlay && <div className="overlay-background"></div>}
    </div>
  );
};