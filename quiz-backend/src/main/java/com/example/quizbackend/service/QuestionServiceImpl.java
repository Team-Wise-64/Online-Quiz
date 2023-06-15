package com.example.quizbackend.service;

import com.example.quizbackend.model.Question;
import com.example.quizbackend.repository.QuestionRepository;
import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService{

  @Autowired
  private QuestionRepository questionRepository;

  @Override
  public Object[] getAllQuestions(Integer quiz_id) {
    return questionRepository.findByQuizId(quiz_id);
  }

  @Override
  public Object[] getAQuestion(Integer quiz_id, Integer questionNumber) {
    return questionRepository.findByQuestionNum(quiz_id,questionNumber);
  }
}
