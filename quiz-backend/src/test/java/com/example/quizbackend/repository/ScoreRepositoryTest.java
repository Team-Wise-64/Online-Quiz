package com.example.quizbackend.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class ScoreRepositoryTest {

    @Autowired
    private ScoreRepository scoreRepository;

    @Test
    void shouldGetAllUserScores() {
        Integer userId = 1;
        Object[] scores = scoreRepository.getAllUserScores(userId);
        assertEquals(3, scores.length);
    }

    @Test
    void shouldGetSingleScore() {
        Integer userId = 1;
        Integer quizId = 1;
        Object[] score = scoreRepository.getSingleScore(userId, quizId);
        assertEquals(1, score.length);
    }

    @Test
    void shouldAddScore() {
        Integer quizId = 1;
        Integer score = 100;
        Integer scoreId = 1;
        Object[] addedScore = scoreRepository.addScore(quizId, score, scoreId);
        assertEquals(1, addedScore.length);
        assertEquals(score, addedScore[0]);
    }
}