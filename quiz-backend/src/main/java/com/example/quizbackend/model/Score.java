package com.example.quizbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "scores")
public class Score {

  @Id
  @Column(name = "score_number")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int scoreId;

  @Column(name = "quiz_id")
  private int quizId;

  @Column(name = "question_id")
  private int questionId;

  @Column(name = "score")
  private int score;



  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  public Score(){

  }

  public Score(int quizId, int scoreId, int questionId, int score) {
    this.quizId = quizId;
    this.scoreId = scoreId;
    this.questionId = questionId;
    this.score = score;
  }

}
