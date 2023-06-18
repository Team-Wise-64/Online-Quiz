package com.example.quizbackend.service;

import com.example.quizbackend.model.Question;
import com.example.quizbackend.model.Quiz;
import java.util.List;

public interface QuizService {

  List<Quiz> getAllQuiz();

  String getQuizNameById(Integer id);

  Quiz saveQuiz(Quiz newQuiz);


  Quiz updateQuizNameById(Long id, Quiz quiz);

  Quiz deleteQuizById(Long id);


}
