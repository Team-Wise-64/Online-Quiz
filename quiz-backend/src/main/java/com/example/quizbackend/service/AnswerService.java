package com.example.quizbackend.service;

import com.example.quizbackend.model.Answer;

public interface AnswerService {

    Object[] getAnswer(Integer questionId);

    Answer saveAnswer(Answer newAnswer);
}
