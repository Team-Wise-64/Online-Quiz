package com.example.quizbackend.repository;

import com.example.quizbackend.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreRepository extends JpaRepository<Score, Integer> {

  @Query(
      value = "SELECT score FROM scores u WHERE u.user_id = :userId",
      nativeQuery = true)
  Object[] getAllUserScores(@Param("userId") Integer userId);

  @Query(
      value = "SELECT score FROM scores u WHERE u.user_id= :userId AND u.quiz_id= :quizId",
      nativeQuery = true)
  Object[] getSingleScore(
      @Param("userId") Integer userId,
      @Param("quizId") Integer quizId);

  @Query(
      value = "INSERT INTO scores (quiz_id, score, user_id ) VALUES (:quizId, :score, :userId)",
      nativeQuery = true)
  Object[] addScore(
      @Param("quizId") Integer quizId,
      @Param("score") Integer score,
      @Param("userId") Integer userId);






}
