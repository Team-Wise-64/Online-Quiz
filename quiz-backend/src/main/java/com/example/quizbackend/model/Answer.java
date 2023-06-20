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

  @Column(name = "quiz_id")
  private Integer quiz_id;

  @OneToOne(mappedBy = "answer")
  private Question question;

  public Answer(Integer answerNumber, String a, String b, String c, String d, String answer, Integer quiz_id) {
    this.answerNumber = answerNumber;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.answer = answer;
    this.quiz_id = quiz_id;
  }

  public Answer(){

  }

  public Integer getAnswerNumber() {
    return answerNumber;
  }

  public void setAnswerNumber(Integer answerNumber) {
    this.answerNumber = answerNumber;
  }

  public String getA() {
    return a;
  }

  public void setA(String a) {
    this.a = a;
  }

  public String getB() {
    return b;
  }

  public void setB(String b) {
    this.b = b;
  }

  public String getC() {
    return c;
  }

  public void setC(String c) {
    this.c = c;
  }

  public String getD() {
    return d;
  }

  public void setD(String d) {
    this.d = d;
  }

  public String getAnswer() {
    return answer;
  }

  public void setAnswer(String answer) {
    this.answer = answer;
  }

  public Integer getQuiz_id() {
    return quiz_id;
  }

  public void setQuiz_id(Integer quiz_id) {
    this.quiz_id = quiz_id;
  }

  public Question getQuestion() {
    return question;
  }

  public void setQuestion(Question question) {
    this.question = question;
  }
}
