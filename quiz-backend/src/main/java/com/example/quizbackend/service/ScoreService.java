package com.example.quizbackend.service;

import jakarta.persistence.criteria.CriteriaBuilder.In;
import org.springframework.stereotype.Service;

public interface ScoreService {

  Object[] getAllUserScore(Integer user_id);

  Object[] getSingleScore(Integer question_id, Integer user_id);

}
