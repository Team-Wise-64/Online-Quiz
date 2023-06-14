package com.example.quizbackend.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "questions")
public class Question {
  @Id
  @Column(name = "question_number")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int questionNumber;

  @Column(name = "question")
  private String question;

  @Column(name = "a")
  private String a;

  @Column(name = "b")
  private String b;

  @Column(name = "c")
  private String c;

  @Column(name = "d")
  private String d;

  @Column(name = "answer")
  private String answer;

//  @Column(name = "quiz_id")
//  private Integer quiz_id;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "quiz_id", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
  @JsonIgnore
  private Quiz quiz;

  public Question(){

  }

  public Question(int questionNumber, String question, String a, String b, String c, String d,
      String answer) {
    this.questionNumber = questionNumber;
    this.question = question;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer;
    //this.quiz_id = quiz_id;
  }

}
