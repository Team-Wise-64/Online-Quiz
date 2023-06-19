package com.example.quizbackend.service;

import com.example.quizbackend.model.Score;
import jakarta.persistence.criteria.CriteriaBuilder.In;
import java.util.List;
import org.springframework.stereotype.Service;

public interface ScoreService {

  Object[] getAllUserScore(Integer user_id);

  Object[] getSingleScore(Integer question_id, Integer user_id);

  Score saveScore(Score score);

  List<Score> allScores();

}
