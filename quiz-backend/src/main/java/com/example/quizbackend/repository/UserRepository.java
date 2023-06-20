package com.example.quizbackend.repository;

import com.example.quizbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

  public User findAllByUserId(int userId);

}
