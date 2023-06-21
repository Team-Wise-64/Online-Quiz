import React, {useState, useEffect} from "react";
import users from "../../seed/userData";
import apiURL from "../api";

export default function RegistrationForm(){
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
    
        // Perform registration logic here, e.g. API call to register user
    
        // Reset form fields
        setName('');
        setPassword('');
      };
      return (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Username:</label>
              <input type="text" id="name" value={username} onChange={handleNameChange} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      );
};
