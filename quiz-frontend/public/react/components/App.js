import React, { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import QuizList from "./QuizList";
import PlayingQuiz from "./PlayingQuiz";
import AddQuiz from "./AddQuiz";
import LogIn from "./LoginForm";
import Header from "./Header";
import RegistrationForm from "./RegistrationForm";

import "../../style.css";
import apiURL from "../api";

export const App = () => {
  const [state, setState] = useState("loginForm");
  const [quizzes, setQuizzes] = useState([]);
  console.log(state);
  const [id, setId] = useState(0); //quiz id
  const [userId, setUserId] = useState(null); //current user id logged in

  async function getQuizzes() {
    try {
      const res = await fetch(`${apiURL}/quizzes`);
      const data = await res.json();
      console.log(data);
      setQuizzes(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getQuizzes();
  }, []);
  return (
    <>
      <Header setState={setState}/>
      <main>
        {state === "loginForm" && (
          <LogIn setState={setState} setUserId={setUserId} />
        )}
        {state === "registrationForm" && (
          <RegistrationForm setState={setState}/>
        )}

        {state === "landing" && <LandingPage setState={setState} />}

        {state === "pickingQuiz" && (
          <QuizList setState={setState} quizzes={quizzes} setId={setId} />
        )}

        {state === "playingQuiz" && (
          <PlayingQuiz setState={setState} id={id} userId={userId} />
        )}

        {state === "adding" && <AddQuiz setState={setState} />}
      </main>
    </>
  );
};
