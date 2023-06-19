package com.example.quizbackend.repository;

import com.example.quizbackend.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ScoreRepository extends JpaRepository<Score, Integer> {

  @Query(
      value = "SELECT score FROM scores u WHERE u.user_id = :userId",
      nativeQuery = true)
  Object[] getAllUserScores(@Param("userId") Integer userId);

  @Query(
      value = "SELECT score FROM scores u WHERE u.user_id= :userId AND u.question_id= :questionId",
      nativeQuery = true)
  Object[] getSingleScore(
      @Param("userId") Integer userId,
      @Param("questionId") Integer questionId);

}
