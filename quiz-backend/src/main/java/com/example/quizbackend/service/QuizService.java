package com.example.quizbackend.service;

import com.example.quizbackend.model.Question;
import com.example.quizbackend.model.Quiz;
import java.util.List;

public interface QuizService {

  List<Question> getAllQuestions();

  Quiz getQuizById(Integer id);


  Quiz updateQuizById(Long id, Quiz quiz);

  Quiz deleteQuizById(Long id);


}
