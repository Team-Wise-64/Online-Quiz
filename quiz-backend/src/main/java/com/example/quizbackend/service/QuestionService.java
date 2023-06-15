package com.example.quizbackend.service;

import com.example.quizbackend.model.Question;
import java.util.Collection;
import java.util.List;

public interface QuestionService {

  Object[] getAllQuestions(Integer quiz_id);

  Object[] getAQuestion(Integer quiz_id, Integer questionNumber);

}
