package com.example.quizbackend.repository;

import com.example.quizbackend.model.Question;
import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface QuestionRepository extends JpaRepository<Question, Integer> {


  @Query(
      value = "SELECT question, a, b, c, d, answer FROM questions u WHERE u.quiz_id = :quizId",
      nativeQuery = true)
  Object[] findByQuizId(@Param("quizId") Integer quizId);

}
