package com.example.quizbackend.service;

import com.example.quizbackend.model.Question;
import com.example.quizbackend.model.Quiz;
import com.example.quizbackend.repository.QuizRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

@Service
public class QuizServiceImpl implements QuizService{


  @Autowired
  private QuizRepository quizRepository;


  @Override
  public List<Quiz> getAllQuiz() {
    return quizRepository.findAll();
  }

  @Override
  public String getQuizNameById(Integer id) {
    Optional<Quiz> optionalQuiz = quizRepository.findById(id);
    return optionalQuiz.isPresent() ? optionalQuiz.get().getQuizName() : null;
  }
  @Override
  public Quiz updateQuizNameById(Long id, Quiz quiz) {
    return null;
  }

  @Override
  public Quiz deleteQuizById(Long id) {
    return null;
  }



}
