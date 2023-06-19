import React, { useState, useEffect } from "react";
import apiURL from "../api";

import { TextField } from "@mui/material";
import { FormControl, FormLabel } from "@mui/material";

export default function AddQuiz({ setState }) {
  const [questions, setQuestions] = useState([]);

  const [quizName, setQuizName] = useState("");
  const [question, setQuestion] = useState({});
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [answer, setAnswer] = useState("");

  let form = [];

  function handleSubmitQuestion(e) {
    e.preventDefault();
    setQuestion({ question: question, a: a, b: b, c: c, d: d, answer: answer });
    setQuestions([question, ...questions]);
    console.log(question);
    console.log(questions);
  }

  for (let i = 0; i < 10; i++) {
    form.push(
      <form onSubmit={(e) => handleSubmitQuestion(e)}>
        <FormLabel>Question {i + 1}</FormLabel>
        <TextField
          label="question"
          onChange={(e) => setQuestion(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Option A:</FormLabel>
        <TextField
          label="a"
          onChange={(e) => setA(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Option B:</FormLabel>
        <TextField
          label="b"
          onChange={(e) => setB(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Option C:</FormLabel>
        <TextField
          label="c"
          onChange={(e) => setC(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Option D:</FormLabel>
        <TextField
          label="d"
          onChange={(e) => setD(e.target.value)}
          type="text"
          variant="outlined"
        />
        <FormLabel>Answer: </FormLabel>
        <TextField
          label="answer"
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
          variant="outlined"
        />
        <button type="submit">Save question</button>
      </form>
    );
  }

  return (
    <div className="form">
      <p>Hello</p>
      <FormControl onSubmit={(e) => {
        e.preventDefault(); 
        }}>
        <FormLabel>Quiz name</FormLabel>
        <TextField
          type="text"
          variant="outlined"
          onChange={(e) => setQuizName(e.target.value)}
        ></TextField>
        {form}
        <button type="submit">Save quiz</button>
      </FormControl>
    </div>
  );
}
