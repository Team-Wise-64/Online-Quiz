import React, {useState, useEffect} from "react";
import users from "../../seed/userData";
import apiURL from "../api";
import { TextField, Button, Typography } from "@mui/material";


export default function RegistrationForm({setState, setUserId}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    
    async function checkUserExists(){
        try{
            const res = await fetch(`${apiURL}/users`, {
                method: "GET",
              });
            const data = await res.json();
            for (let i = 0; i < data.length; i++) {
                let user = data[i];
                console.log(user);
                if (!(user.username === username)) {
                    setIsRegistered(true);
                }
            }
            console.log({"username": username, "password": password});
          }
          catch(err){
                console.error("Error is: " + err);
            }
    };
    async function handleSubmit(e){
        e.preventDefault();
        setState("registrationForm");
        checkUserExists();
        if(!(isRegistered)){
            try{
              let body = JSON.stringify({"username": username, "password": password, "scores": []})
                const response = await fetch(`${apiURL}/users`,{
                    method: "POST",
                    headers: {'Content-Type' : "application/json"},
                    body: body
                })
                const newData = await response.json();
                setUserId(newData.userId)
                setIsRegistered(true);
                setState("landing")
                }catch(err){
                    console.error("Error is: " + err);
                }
        }
    };
      return (
        <div className="form">
          <h2 className="p-text">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="TextField">
              <TextField type="text" id="username" value={username} placeholder="Username*" onChange={(e) => setUsername(e.target.value)} required/>
            </div>
            <div className="TextField">
              <TextField type="password" id="password" value={password} placeholder="Password*" onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            {/* <div>
                <TextField type="password" id="checkPassword" value={checkPassword} placeholder="Check Password*" onChange={(e) => setCheckPassword(e.target.value)} required/>
            </div> */}
            <div className="button-container">
                <Button variant="contained" type="submit">Register</Button>
                {isRegistered && <p>Username already exists</p>}
            </div>
          </form>
        </div>
      );
};
