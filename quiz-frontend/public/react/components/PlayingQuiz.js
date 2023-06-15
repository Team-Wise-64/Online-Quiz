import React, {useState, useEffect} from "react";
import apiURL from "../api";

export default function PlayingQuiz({id}){
    const [questions, setQuestions] = useState([]);
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        questionData();
    },[]);

    async function questionData(){
        try{
            console.log(id)
            const response = await fetch(`${apiURL}/quizzes/${id}/questions`);
            const data = await response.json();
            console.log(`${data} is working!`);
            setQuestions(data);
        }catch(err){
            console.error(err);
        }
    }

    //questionData()

    return(
        <>
        <h1>Hello world!</h1>
        {questions.map((question, index) => (
            <p key={index}>{index}: {question}</p>
        ))}

        <p>{questions[idx]}</p>
        </>
    );
}