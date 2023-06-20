package com.example.quizbackend.service;

import com.example.quizbackend.model.Quiz;
import com.example.quizbackend.model.User;
import com.example.quizbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUser(){
        return userRepository.findAll();
    }

    @Override
    public String getUserNameById(Integer id){
        Optional<User> optionalUser = userRepository.findById(id);
        return optionalUser.map(User::getUsername).orElse(null);
    }
    @Override
    public User updateUserNameById(Long id, User user) {
        return null;
    }

    @Override
    public User deleteUserNameById(Long id) {
        return null;
    }

    @Override
    public User findByUser_id(int userId){
        return userRepository.findAllByUserId(userId);
    }
}
