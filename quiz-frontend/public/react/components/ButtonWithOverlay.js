import React, { useState } from "react";
import "../../style.css";

export default function ButtonWithOverlay(){
  const [overlay, setOverlay] = useState(false);

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
                  <th className="table-head">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="position1">1</td>
                  <td className="position1">Leader 1</td>
                  <td className="position1">1000</td>
                </tr>
                <tr>
                  <td className="position2">2</td>
                  <td className="position2">Leader 2</td>
                  <td className="position2">900</td>
                </tr>
                <tr>
                  <td className="position3">3</td>
                  <td className="position3">Leader 3</td>
                  <td className="position3">800</td>
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