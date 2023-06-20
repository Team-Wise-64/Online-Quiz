package com.example.quizbackend.modelTest;

import static org.junit.jupiter.api.Assertions.*;

import com.example.quizbackend.model.Score;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ScoreModelTest {
    @Test
    void scoreShouldHaveId(){
        Score score = new Score();
        score.setScoreId(1);
        assertEquals(1, score.getScoreId());
    }
    @Test
    void scoreShouldHaveQuizId(){
        Score score = new Score();
        score.setQuizId(3);
        assertEquals(3, score.getQuizId());
    }
    @Test
    void scoreShouldHaveScore(){
        Score score = new Score();
        score.setScore(34);
        assertEquals(34, score.getScore());
    }
    //Test for User relationship
}
