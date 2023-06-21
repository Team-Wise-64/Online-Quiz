import React, {useState, useEffect} from "react";
import users from "../../seed/userData";
import apiURL from "../api";
import { Button } from "@mui/base";

export default function RegistrationForm({setState}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setPassword('');
      };
      return (
        <div className="form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="name">Username:</label>
              <input type="text" id="name" value={username} onChange={handleNameChange} />
            </div>
            <div className="input">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="button-container">
                <Button variant="contained" type="submit">Register</Button>
            </div>
          </form>
        </div>
      );
};
