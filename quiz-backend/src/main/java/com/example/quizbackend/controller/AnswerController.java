package com.example.quizbackend.controller;

import com.example.quizbackend.model.Answer;
import com.example.quizbackend.model.Question;
import com.example.quizbackend.service.AnswerServiceImpl;
import com.example.quizbackend.service.QuestionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnswerController {

    @Autowired
    private AnswerServiceImpl answerService;


    //returns all questions for a set quiz
    @CrossOrigin(origins = "http://localhost:1234")
    @GetMapping("/quizzes/{quiz_id}/answers")
    public Object[] getAllAnswers(@PathVariable(value = "quiz_id") Integer quizId){

        return answerService.getAnswers(quizId);
    }

    @CrossOrigin(origins = "http://localhost:1234")
    @GetMapping("/quizzes/{quiz_id}/questions/{question_id}/answer")
    public Object[] getAnswer(@PathVariable(value = "quiz_id") Integer quizId,
        @PathVariable(value = "question_id") Integer question_id){

        return answerService.getAnswer(quizId, question_id);
    }

    @CrossOrigin(origins = "http://localhost:1234")
    @PostMapping("/quizzes/{quiz_id}/answers")
    public Answer saveAnswer(@RequestBody Answer newAnswer) {
        return answerService.saveAnswer(newAnswer);
    }

}
