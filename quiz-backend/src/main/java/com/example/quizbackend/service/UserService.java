package com.example.quizbackend.service;

import com.example.quizbackend.model.User;

import java.util.List;

public interface UserService {

    User findByUser_id(int userId);
    List<User> getAllUser();
    String getUserNameById(Integer id);
    User saveUser(User user);
    User updateUserNameById(Long id, User user);
    User deleteUserNameById(Long id);
}
