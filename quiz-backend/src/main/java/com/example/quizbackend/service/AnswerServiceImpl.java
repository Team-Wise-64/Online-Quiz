package com.example.quizbackend.service;

import com.example.quizbackend.model.Answer;
import com.example.quizbackend.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private AnswerRepository answerRepository;
    @Override
    public Object[] getAnswers(Integer quizId) {
        return answerRepository.findByQuizId(quizId);
    }

    @Override
    public Object[] getAnswer(Integer quizId, Integer questionId){
        return answerRepository.findByQuestionId(quizId, questionId);
    }

    public Answer saveAnswer(Answer newAnswer){
        return answerRepository.save(newAnswer);
    }
}
