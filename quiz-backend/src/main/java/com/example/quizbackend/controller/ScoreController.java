package com.example.quizbackend.controller;

import com.example.quizbackend.model.Score;
import com.example.quizbackend.repository.ScoreRepository;
import com.example.quizbackend.service.ScoreServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoreController {

  @Autowired
  private ScoreServiceImpl scoreService;

  @CrossOrigin(origins = "http://localhost:1234")
  @GetMapping("/scores")
  private List<Score> allScores(){
    return scoreService.allScores();
  }


  @CrossOrigin(origins = "http://localhost:1234")
  @GetMapping("/scores/{user_id}")
  private Object[] getAllUserScores(@PathVariable("user_id") Integer user_id){
    return scoreService.getAllUserScore(user_id);
  }

  @CrossOrigin(origins = "http://localhost:1234")
  @GetMapping("/quizzes/{quiz_id}/scores/{user_id}")
  private Object[] getQuestionScore(@PathVariable("quiz_id") Integer quiz_id,
      @PathVariable("user_id") Integer user_id){
    return scoreService.getSingleScore(quiz_id, user_id);
  }

  @CrossOrigin(origins = "http://localhost:1234")
  @PostMapping("/scores")
  private Score saveScore(@RequestBody Score score){
    return scoreService.saveScore(score);
  }

}
