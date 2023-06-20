package com.example.quizbackend.modelTest;

import static org.junit.jupiter.api.Assertions.*;

import com.example.quizbackend.model.Answer;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class AnswerModelTest {
    @Test
    void answerShouldHaveNumber(){
        Answer answer = new Answer();
        answer.setAnswerNumber(1);
        assertEquals(1, answer.getAnswerNumber());
    }
    @Test
    void answerShouldHaveChoiceA(){
        Answer answer = new Answer();
        answer.setA("Choice A");
        assertEquals("Choice A", answer.getA());
    }
    @Test
    void answerShouldHaveChoiceB(){
        Answer answer = new Answer();
        answer.setB("Choice B");
        assertEquals("Choice B", answer.getB());
    }
    @Test
    void answerShouldHaveChoiceC(){
        Answer answer = new Answer();
        answer.setC("Choice C");
        assertEquals("Choice C", answer.getC());
    }
    @Test
    void answerShouldHaveChoiceD(){
        Answer answer = new Answer();
        answer.setD("Choice D");
        assertEquals("Choice D", answer.getD());
    }
    @Test
    void answerShouldHaveAnswer(){
        Answer answer = new Answer();
        answer.setAnswer("The right answer!");
        assertEquals("The right answer!", answer.getAnswer());
    }
    @Test
    void answerShouldHaveQuizId(){
        Answer answer = new Answer();
        answer.setQuiz_id(2);
        assertEquals(2, answer.getQuiz_id());
    }
    //Test for question relationship
}
