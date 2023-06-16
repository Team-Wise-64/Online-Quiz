package com.example.quizbackend.controller;

import com.example.quizbackend.service.AnswerServiceImpl;
import com.example.quizbackend.service.QuestionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnswerController {

    @Autowired
    private AnswerServiceImpl answerService;


    //returns all questions for a set quiz
    @CrossOrigin(origins = "http://localhost:1234")
    @GetMapping("/quizzes/{quiz_id}/questions/{question_id}/answer")
    public Object[] getAllAnswers(@PathVariable(value = "quiz_id") Integer quizId,
        @PathVariable(value = "question_id") Integer question_id){

        return answerService.getAnswer(question_id + (10 * (quizId - 1)));
    }
}
