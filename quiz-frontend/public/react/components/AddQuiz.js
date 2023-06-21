import React, { useState, useEffect } from "react";
import apiURL from "../api";

import { TextField } from "@mui/material";
import { form, FormLabel } from "@mui/material";

export default function AddQuiz({ setState }) {
  const [questions, setQuestions] = useState([]);
  const [showQuiz, setShowQuiz] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [idx, setIdx] = useState(1);

  const [quizName, setQuizName] = useState("");
  const [question, setQuestion] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {

  }, []);


  function handleSubmitQuestion(e) {
    e.preventDefault();
    let q = {question: question};
    let options = {a: a, b: b, c: c, d: d, answer: answer};
    setQuestions([...questions, [q, options]]);

    setQuestion("")
    setA("")
    setB("")
    setC("")
    setD("")
    setAnswer("")
    console.log(questions);
    //post method here
  }


  async function saveQuiz(){
    const quizRes = await fetch(`${apiURL}/quizzes`, {
      method: "POST",
      headers: {'Content-Type' : "application/json"},
      body: JSON.stringify({quizName: quizName})
    })
    const data = await quizRes.json();

  }
  async function saveQuestion(idx){

    const questionRes = await fetch(`${apiURL}/questions`, {
      method: "POST",
      headers: {'Content-Type' : "application/json"},
      body: JSON.stringify({
        "questionNumber": idx,
        "question": question,
        "quiz": {"quiz_id": 0}
      })
    })

    const answerRes = await fetch(`${apiURL}/quizzes/{quiz_id}/answer`, {
      method: "POST",
      headers: {'Content-Type' : "application/json"},
      body: {}
    })
  }


  return (
    <div className="form">
      {showQuiz && (
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(quizName) 
        setShowQuiz(false);
        setShowQuestion(true);
        saveQuiz();
        }}>
        <FormLabel>Quiz name</FormLabel>
        <TextField
          type="text"
          variant="outlined"
          onChange={(e) => setQuizName({quiz_name: e.target.value})}
        ></TextField>
        <button type="submit">Next</button>
      </form>
      )}

      {showQuestion && (
      <form onSubmit={(e) => handleSubmitQuestion(e)}>
        <FormLabel>Question</FormLabel>
        <TextField
          label="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Option A:</FormLabel>
        <TextField
          label="a"
          value={a}
          onChange={(e) => setA(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Option B:</FormLabel>
        <TextField
          label="b"
          value={b}
          onChange={(e) => setB(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Option C:</FormLabel>
        <TextField
          label="c"
          value={c}
          onChange={(e) => setC(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Option D:</FormLabel>
        <TextField
          label="d"
          value={d}
          onChange={(e) => setD(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Answer: </FormLabel>
        <TextField
          label="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
          variant="outlined"
        />
        <p className="p-text">Question added: {questions.length} </p>
        <button type="submit">Add another question</button>
      </form>
      )}
    </div>
  );
}
