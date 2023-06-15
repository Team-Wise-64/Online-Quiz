import React from "react";
import apiURL from "../api";

export default async function PlayingQuiz(){
    const [quiz, setQuiz] = useState("playingQuiz");

    useEffect(() => {
        quizData();
    },[]);

    async function quizData(){
        try{
            const response = fetch(`${apiURL}/quizzes/questions`);
            setQuiz(response);
            console.log(setQuiz);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <>
        {quiz.map(quizzie => (
            <button key={quizzie.quiz_id}>{quizzie.question_number}</button>
        ))}
        </>
    );
}