import React, { useState } from "react";
import AllQuiz from "./AllQuiz";

export default Landing = ({ setState }) => {
  return (
    <div className="App-header">
      <p>Welcome to The Quiz Nexus</p>
      <AllQuiz setState={setState} />
    </div>
  );
};