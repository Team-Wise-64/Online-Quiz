package com.example.quizbackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "scores")
public class Score {

  @Id
  @Column(name = "score_number")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int scoreId;

  @Column(name = "quiz_id")
  private int quizId;


  @Column(name = "score")
  private int score;

  @JsonProperty
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", referencedColumnName = "user_id")
  private User user;


  public int getScoreId() {
    return scoreId;
  }

  public void setScoreId(int scoreId) {
    this.scoreId = scoreId;
  }

  public int getQuizId() {
    return quizId;
  }

  public void setQuizId(int quizId) {
    this.quizId = quizId;
  }

  public int getScore() {
    return score;
  }

  public void setScore(int score) {
    this.score = score;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }


  public Score(){

  }

  public Score(int scoreId, int quizId, int score, User user) {
    this.scoreId = scoreId;
    this.quizId = quizId;
    this.score = score;
    this.user = user;
  }
}
