package com.example.quizbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "answer")
public class Answer {

  @Id
  private Integer question_number;
  private String answer;

  public Answer(){

  }

  public Answer(Integer question_number, String answer) {
    this.question_number = question_number;
    this.answer = answer;
  }
}
