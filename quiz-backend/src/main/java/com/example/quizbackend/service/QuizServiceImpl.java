package com.example.quizbackend.service;

import com.example.quizbackend.model.Question;
import com.example.quizbackend.model.Quiz;
import com.example.quizbackend.repository.QuizRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuizServiceImpl implements QuizService{


  @Autowired
  private QuizRepository quizRepository;
  @Override
  public List<Question> getAllQuestions() {
    return null;
  }

  @Override
  public Quiz getQuizById(Integer id) {
    Optional<Quiz> quiz = quizRepository.findById(id);
    if (quiz.isPresent()){
      return quiz.get();
    }
    return null;
  }

  @Override
  public Quiz updateQuizById(Long id, Quiz quiz) {
    return null;
  }

  @Override
  public Quiz deleteQuizById(Long id) {
    return null;
  }
}
