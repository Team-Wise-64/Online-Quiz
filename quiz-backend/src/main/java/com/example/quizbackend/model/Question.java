package com.example.quizbackend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Question {
  @Id
  private int questionNumber;

  public Question(){

  }

}
