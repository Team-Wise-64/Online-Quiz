package com.example.quizbackend.modelTest;

import com.example.quizbackend.model.User;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserModelTest {
    @Test
    void userShouldHaveUserId(){
        User user = new User();
        user.setUserId(1);
        assertEquals(1, user.getUserId());
    }
    @Test
    void userShouldHaveUserName(){
        User user = new User();
        user.setUsername("123");
        assertEquals("123", user.getUsername());
    }
    @Test
    void userShouldHavePassword(){
        User user = new User();
        user.setPassword("123");
        assertEquals("123", user.getPassword());
    }
}
