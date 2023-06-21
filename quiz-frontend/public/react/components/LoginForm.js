import React, { useState } from "react";
import users from "../../seed/userData";
import apiURL from "../api";
import { TextField, Button, Typography } from "@mui/material";

export default function LogIn({ setState, setUserId }) {
  const [error, setError] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setState("loginForm");
    /*This is for new users
        try{
            const res = await fetch(`${apiURL}/users`,{
                method: "POST",
                body: JSON.stringify({username: 1, password: 2})
            })
            const data = await res.json();
        }catch(err){}
        */
    try {
      const res = await fetch(`${apiURL}/users`, {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      console.log(username);
      console.log(password);
      for (let i = 0; i < data.length; i++) {
        let user = data[i];
        if (user.username === username && user.password === password) {
          setUserId(user.userId);
          console.log(user.userId);
          setState("landing");
        }
      }

      //if invalid login
      setInvalidLogin(true);
    } catch (err) {
      console.error("Error is: " + err);
    }
  }

  const renderForm = (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <TextField
            label="Username"
            type="text"
            name="username"
            variant="outlined"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="input">
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="button-container">
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </div>
        <div>
          <p className="or">or</p>
        </div>
        <div className="button-container">
          <Button
            variant="contained"
            onClick={() => {
              setState("landing");
            }}
          >
            sign in as a guest
          </Button>
        </div>
      </form>
      {invalidLogin && (
        <Typography variant="body1" color="error">
          Invalid login, please try again!
        </Typography>
      )}
      <div>
        <p className="notice">
          <b>Score</b> not saved for guests
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <div>
        <Typography variant="h6" className="login-form">
          Sign In
        </Typography>
        {isLoggedIn ? (
          <Typography variant="body1">
            User is successfully logged in
          </Typography>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}
