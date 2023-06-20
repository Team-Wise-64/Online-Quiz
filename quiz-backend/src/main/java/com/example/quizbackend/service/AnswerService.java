package com.example.quizbackend.service;

import com.example.quizbackend.model.Answer;

public interface AnswerService {

    Object[] getAnswers(Integer questionId);

    Object[] getAnswer(Integer quizId, Integer questionId);

    Answer saveAnswer(Answer newAnswer);
}
