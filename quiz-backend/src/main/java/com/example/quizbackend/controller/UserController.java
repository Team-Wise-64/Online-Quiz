package com.example.quizbackend.controller;

import com.example.quizbackend.model.Quiz;
import com.example.quizbackend.model.User;
import com.example.quizbackend.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserServiceImpl userService;
    @PostMapping("/quizzes")
    public User saveUser(@RequestBody User user) {
        return null;
    }

    @CrossOrigin(origins = "http://localhost:1234")
    @GetMapping("/users")
    public List<User> getAllUser() {
        return userService.getAllUser();
    }

    @GetMapping("/users/{id}")
    public String getUserById(@PathVariable("id") Integer id) {

        return userService.getUserNameById(id);
    }

    @PutMapping("/users/{id}")
    public Quiz updateUser(@PathVariable("id") Long id, @RequestBody User user) {
        return null;
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        return null;
    }
}
