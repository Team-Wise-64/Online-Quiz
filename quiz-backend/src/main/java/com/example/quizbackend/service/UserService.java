package com.example.quizbackend.service;

import com.example.quizbackend.model.User;

import java.util.List;

public interface UserService {

    List<User> getAllUser();
    String getUserNameById(Integer id);
    User updateUserNameById(Long id, User user);
    User deleteUserNameById(Long id);
}
