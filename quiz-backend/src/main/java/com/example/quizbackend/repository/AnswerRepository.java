package com.example.quizbackend.repository;

import com.example.quizbackend.model.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.swing.*;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {
    @Query(
            value = "SELECT a, b, c, d, answer FROM answers u WHERE u.question_id = :questionId",
            nativeQuery = true)
    Object[] findByQuestionId(@Param("questionId") Integer questionId);

}
//    @Query(value = "INSERT INTO question VALUES :quiz_name",
//        nativeQuery = true
//    )
//    Object[] saveQuiz(@Param("quiz_name") String quizName);
