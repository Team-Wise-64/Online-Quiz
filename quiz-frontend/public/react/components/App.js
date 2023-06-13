import apiURL from '../api';
import React, { useState } from "react";
import Play from "./allquiz";
import '../../style.css';

export const App = () => {
  return (
    <div>
      <header className="App-header">
        <h1>Welcome to the Mind Quest!</h1>
        <Play />
      </header>
    </div>
  );
}
