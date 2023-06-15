package com.example.quizbackend.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "questions")
public class Question {
  @Id
  @Column(name = "question_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int questionId;
  @Column(name = "question_number")
  private Integer questionNumber;

  @Column(name = "question")
  private String question;


  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "quiz_id", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
  @JsonIgnore
  private Quiz quiz;
  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "question_id", nullable = false)
  private Answer answer;

  public Question(){

  }

  public Question(int questionId, int questionNumber, String question) {
    this.questionId = questionId;
    this.questionNumber = questionNumber;
    this.question = question;
  }

}
