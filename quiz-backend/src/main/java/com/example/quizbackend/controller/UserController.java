package com.example.quizbackend.controller;

import com.example.quizbackend.model.User;
import com.example.quizbackend.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @CrossOrigin(origins = "http://localhost:1234")
    @PostMapping("/users")
    public User saveUser(@RequestBody User user) {
        return null;
    }

    @CrossOrigin(origins = "http://localhost:1234")
    @GetMapping("/users")
    public List<User> getAllUser() {
        return userService.getAllUser();
    }

    @CrossOrigin(origins = "http://localhost:1234")
    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") Integer id) {
        return userService.findByUser_id(id);
    }

    @CrossOrigin(origins = "http://localhost:1234")
    @PutMapping("/users/{id}")
    public User updateUser(@PathVariable("id") Long id, @RequestBody User user) {
        return null;
    }

    @CrossOrigin(origins = "http://localhost:1234")
    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        return null;
    }
}
