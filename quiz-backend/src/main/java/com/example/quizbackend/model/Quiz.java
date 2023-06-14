package com.example.quizbackend.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.List;

@Entity
@Table(name = "quizzes")
public class Quiz {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "quiz_id")
  private int quiz_id;

  @Column(name = "quiz_name")
  private String quizName;

//  @OneToMany(fetch = FetchType.EAGER, mappedBy = "quiz_id")
//  private List<Question> questionList;



  public int getQuizId() {
    return quiz_id;
  }

  public void setQuizId(int quizId) {
    this.quiz_id = quizId;
  }

  public String getQuizName() {
    return quizName;
  }

  public void setQuizName(String quizName) {
    this.quizName = quizName;
  }

  public Quiz(){

  }

  public Quiz(int quiz_number, String quizName) {
    this.quiz_id = quiz_number;
    this.quizName = quizName;
  }
}
