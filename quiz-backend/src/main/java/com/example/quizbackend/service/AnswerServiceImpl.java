package com.example.quizbackend.service;

import com.example.quizbackend.repository.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private AnswerRepository answerRepository;
    @Override
    public Object[] getAnswer(Integer questionId) {
        return answerRepository.findByQuestionId(questionId);
    }
}
