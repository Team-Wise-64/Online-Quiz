package com.example.quizbackend.repository;

import com.example.quizbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

  public User findAllByUserId(int userId);

}
