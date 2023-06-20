package com.example.quizbackend.modelTest;

import com.example.quizbackend.model.Quiz;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class QuizModelTest {
    @Test
    void quizShouldHaveId(){
        Quiz quiz = new Quiz();
        quiz.setQuizId(1);
        assertEquals(1, quiz.getQuizId());
    }
    @Test
    void quizShouldHaveName(){
        Quiz quiz = new Quiz();
        quiz.setQuizName("History");
        assertEquals("History", quiz.getQuizName());
    }
}
