package com.example.quizbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "answers")
public class Answer {

  @Id
  @Column(name = "answer_number")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer answerNumber;
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

  @OneToOne(mappedBy = "answer")
  private Question question;

  public Answer(Integer answerNumber, String a, String b, String c, String d, String answer) {
    this.answerNumber = answerNumber;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer;
  }

  public Answer(){

  }

}
