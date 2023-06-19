package com.example.quizbackend.service;

import com.example.quizbackend.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreServiceImpl implements ScoreService{

  @Autowired
  private ScoreRepository scoreRepository;

  @Override
  public Object[] getAllUserScore(Integer user_id){
    return scoreRepository.getAllUserScores(user_id);
  }

  @Override
  public Object[] getSingleScore(Integer question_id, Integer user_id){
    return scoreRepository.getSingleScore(question_id,user_id);
  }

}
