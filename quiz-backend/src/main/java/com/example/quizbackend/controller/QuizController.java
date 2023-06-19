package com.example.quizbackend.controller;


import com.example.quizbackend.model.Question;
import com.example.quizbackend.model.Quiz;
import com.example.quizbackend.service.QuizService;
import com.example.quizbackend.service.QuizServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QuizController {

  @Autowired
  private QuizServiceImpl quizService;

  //implement crud methods

  @PostMapping("/quizzes")
  public Quiz saveQuiz(@RequestBody Quiz quiz) {
    return quizService.saveQuiz(quiz);
  }

  @CrossOrigin(origins = "http://localhost:1234")
  @GetMapping("/quizzes")
  public List<Quiz> getAllQuiz() {
    return quizService.getAllQuiz();
  }

  @CrossOrigin(origins = "http://localhost:1234")
  @GetMapping("/quizzes/{id}")
  public String getQuizById(@PathVariable("id") Integer id) {

    return quizService.getQuizNameById(id);
  }

  @CrossOrigin(origins = "http://localhost:1234")
  @PutMapping("/quizzes/{id}")
  public Quiz updateQuiz(@PathVariable("id") Long id, @RequestBody Quiz quiz) {
    return null;
  }

  @CrossOrigin(origins = "http://localhost:1234")
  @DeleteMapping("/quizzes/{id}")
  public String deleteQuiz(@PathVariable("id") Long id) {
    return null;
  }
}
