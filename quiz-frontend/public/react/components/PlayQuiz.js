import React from "react";

export default async function PlayingQuiz(){
    const [quiz, setQuiz] = useState([]);

    useEffect(() => {
        quizData();
    },[]);

    async function quizData(){
        try{
            const response = fetch("http://localhost:8080/quizzes");
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

     /*Dummy data for testing in case my code doesn't fetch data
     const dummyQuestions = [
        {
            question: "Which event sparked the beginning of World War II?",
            a: "Attack on Pearl Harbor",
            b: "Invasion of Poland",
            c: "Battle of Stalingrad",
            d: "D-Day Landing",
            answer: "Invasion of Poland",
            quiz_id: 1
        },
        {
            question: "Who was the Prime Minister of the United Kingdom during World War II?",
            a: "Franklin D. Roosevelt",
            b: "Joseph Stalin",
            c: "Winston Churchill",
            d: "Adolf Hitler",
            answer: "Winston Churchill",
            quiz_id: 1
        },
        {
            question: "Which country was NOT part of the Axis Powers during World War II?",
            a: "Germany",
            b: "Italy",
            c: "Japan",
            d: "France",
            answer: "France",
            quiz_id: 1
        },
        {
            question: "What was the code name for the Allied invasion of Normandy?",
            a: "Operation Overlord",
            b: "Operation Desert Storm",
            c: "Operation Barbarossa",
            d: "Operation Market Garden",
            answer: "Operation Overlord",
            quiz_id: 1
        },
        {
            question: "Which battle was a turning point in the Pacific theater of World War II?",
            a: "Battle of Iwo Jima",
            b: "Battle of Midway",
            c: "Battle of Okinawa",
            d: "Battle of Guadalcanal",
            answer: "Battle of Midway",
            quiz_id: 1
        },
        {
            question: "Which country was the first to develop and use atomic bombs during World War II?",
            a: "United States",
            b: "Germany",
            c: "Soviet Union",
            d: "Japan",
            answer: "United States",
            quiz_id: 1
        },
        {
            question: "Who led the Nazi Party in Germany during World War II?",
            a: "Benito Mussolini",
            b: "Winston Churchill",
            c: "Joseph Stalin",
            d: "Adolf Hitler",
            answer: "Adolf Hitler",
            quiz_id: 1
        },
        {
            question: "Which city was the target of the atomic bomb dropped by the United States in August 1945?",
            a: "Tokyo",
            b: "Berlin",
            c: "Nagasaki",
            d: "Hiroshima",
            answer: "Hiroshima",
            quiz_id: 1
        },
        {
            question: "Which major conference among the Allied leaders took place in February 1945 and discussed post-war plans?",
            a: "Tehran Conference",
            b: "Yalta Conference",
            c: "Potsdam Conference",
            d: "Casablanca Conference",
            answer: "Yalta Conference",
            quiz_id: 1
        },
        {
            question: "Which event led to the entry of the United States into World War II?",
            a: "Attack on Pearl Harbor",
            b: "Invasion of Poland",
            c: "Battle of Britain",
            d: "Bombing of Hiroshima",
            answer: "Attack on Pearl Harbor",
            quiz_id: 1
        }]

        return(
            <>
            {dummyQuestions.map(question => (
                <p key={question.quiz_id}>{question.question}</p>
            ))}
            </>
        )*/
}