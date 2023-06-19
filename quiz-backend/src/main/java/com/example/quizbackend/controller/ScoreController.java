package com.example.quizbackend.controller;

import com.example.quizbackend.model.Score;
import com.example.quizbackend.repository.ScoreRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoreController {

  @Autowired
  private ScoreRepository scoreRepository;


  @CrossOrigin(origins = "http://localhost:1234")
  @GetMapping("/users/{user_id}")
  private Object[] getAllUserScores(@PathVariable("user_id") Integer user_id){
    return scoreRepository.getAllUserScores(user_id);
  }

  @CrossOrigin(origins = "http://localhost:1234")
  @GetMapping("/quizzes/{quiz_id}/questions/{question_id}/score/{user_id}")
  private Object[] getQuestionScore(@PathVariable("question_id") Integer questionId,
      @PathVariable("user_id") Integer user_id){
    return scoreRepository.getSingleScore(questionId, user_id);
  }

}
