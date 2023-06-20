import React, { useEffect, useState } from "react";
import "../../style.css";
import apiURL from "../api";

export default function ButtonWithOverlay(){
  const [overlay, setOverlay] = useState(false);
  const [topScores, setTopScores] = useState([]);
  const [quizname, setQuizname ] = useState("")
  const [username, setUsername ] = useState("")

  useEffect(() => {
    getTopScores();
  }, [])

  async function getTopScores(){
    try {
      const res = await fetch(`${apiURL}/scores`);
      const data = await res.json();
      console.log(data);
      let dataToDisplay = (sortScores(data));
      console.log("p",dataToDisplay);
      setTopScores(dataToDisplay);
      
    } catch (error) {
      console.log(error)
    }
    
    
  }

  async function sortScores(data){
    try {
      let sortedData = data.sort(function(a, b){ return a.score - b.score })
      let dataToDisplay = []
      for(let i = 0; i < sortedData.length; i++){
        console.log(sortedData[i]);
        try {
          const quiz = await fetch(`${apiURL}/quizzes/${sortedData[i].quizId}`);
          const quizname = await quiz.text();
    
          const user = await fetch(`${apiURL}/users/${1}`); //replace with user id
          const username = await user.text();
          console.log({quiz_name: quizname, score: sortedData[i].score, username: username})
          return {quiz_name: quizname, score: sortedData[i].score, username: username}
        } catch (error) {
          console.log(error)
        }
        dataToDisplay.push(getQuizandPlayerName(
          sortedData[i].quizId, 
          sortedData[i].score, 
          sortedData[i].userId
          ))
      return dataToDisplay; 
    }
    console.log(dataToDisplay);
    } catch (error) {
      console.log(error)
    }
    
    

  }

  async function getQuizandPlayerName(quiz_id, user_id, score){
    try {
      const quiz = await fetch(`${apiURL}/quizzes/${quiz_id}`);
      const quizname = await quiz.text();

      const user = await fetch(`${apiURL}/users/${user_id}`);
      const username = await user.text();
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