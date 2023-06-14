package com.example.quizbackend.controller;

import com.example.quizbackend.model.Question;
import com.example.quizbackend.repository.QuestionRepository;
import com.example.quizbackend.repository.QuizRepository;
import com.example.quizbackend.service.QuestionServiceImpl;
import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuestionController {

  @Autowired
  private QuestionServiceImpl questionService;


  //returns all questions for a set quiz
  @GetMapping("/quizzes/{quiz_id}/questions")
  public Object[] getAllQuestions(@PathVariable(value = "quiz_id") Integer quiz_id){

    return questionService.getAllQuestions(quiz_id);
  }

}
