import React, {useState, useEffect} from "react";
import apiURL from "../api";

import { TextField } from "@mui/material";
import { FormControl, FormLabel } from '@mui/material';


export default function AddQuiz({setState}){
    //const [numofQ, setNumOfQ] = useState([1,2,3,4,5,6,7,8,9,10])
    const [questions, setQuestions] = useState([])
    const [quiz, setQuiz] = useState([])

    const [quizName, setQuizName] = useState("")
    const [question, setQuestion] = useState({})
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [c, setC] = useState("")
    const [d, setD] = useState("")
    const [answer, setAnswer] = useState("")



    let createForm = () => {
        let form = []

        function handleSubmitQuestion(){
            setQuestion({question: question,
            a: a,
            b: b,
            c: c,
            d: d,
            answer: answer
        })
            setQuestions([questions, ...question])

        }
        

        for(let i = 0; i < 10; i++){
            form.push(
                <form  onSubmit={handleSubmitQuestion}>
                <FormLabel >Question {i}</FormLabel>
                <TextField 
                label="question"
                onChange={e => setQuestion(e.target.value)}
                type="text" 
                variant="outlined"
                />
                <FormLabel>Option A:</FormLabel>
                <TextField 
                label="a"
                onChange={e => setA(e.target.value)}
                type="text" 
                variant="outlined"
                />
                <FormLabel>Option B:</FormLabel>
                <TextField 
                label="b"
                onChange={e => setB(e.target.value)}
                type="text" 
                variant="outlined"
                />
                <FormLabel>Option C:</FormLabel>
                <TextField 
                label="c"
                onChange={e => setC(e.target.value)}
                type="text" 
                variant="outlined"
                />
                <FormLabel>Option D:</FormLabel>
                <TextField 
                label="d"
                onChange={e => setD(e.target.value)}
                type="text" 
                variant="outlined"
                />
                <FormLabel>Answer: </FormLabel>
                <TextField 
                label="answer"
                onChange={e => setAnswer(e.target.value)}
                type="text" 
                variant="outlined"
                />
                <button type="submit">Next question</button>
                </form>
                
            )
        }
    }

    return (
        <div className="form">
            <form onSubmit={setQuiz({quiz_name: quizName})}>
                <FormLabel>Quiz name</FormLabel>
                <TextField type="text" variant="outlined" onChange={e => setQuizName(e.target.value)}></TextField>
                <button type="submit">Continue</button>
            </form>
            {createForm()}

        </div>
    )



}