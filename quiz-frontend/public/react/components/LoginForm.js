import React, {useState} from "react";
import users from '../../seed/userData';
import apiURL from "../api";

import { TextField } from "@mui/material";
import { form, FormLabel } from "@mui/material";

export default function LogIn({setState, setUserId}){
    const [error, setError] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalidLogin, setInvalidLogin] = useState(false);

    async function handleSubmit(e){
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
        try{
            const res = await fetch(`${apiURL}/users`,{
                method: "GET"
            });
            const data = await res.json();
            console.log(data);
            console.log(username);
            console.log(password);
            for(let i = 0; i < data.length; i++){
                let user = data[i];
                if(user.username == username && user.password == password){
                    setUserId(user.user_id)
                    console.log(user.user_id)
                    setState("landing");

                }
            }
            
            //if invalid login
            setInvalidLogin(true);
        }catch(err){
            console.error('Error is: ' + err);
        }
    };
    const renderForm = (
        <div className="form">
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="input">
                <FormLabel>Username</FormLabel>
                <TextField type="text" name="username" variant="outlined" required onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div className="input">
                <FormLabel>Password</FormLabel>
                <TextField type="password" name="password" variant="outlined" required onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div>
                    <button onClick={() => {setState("landing")}}>Or log in as guest(Score not saved)</button>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
            {invalidLogin && <p className="p-text">Invalid login please try again!</p>}
        </div>
        
    );

    return(
        <div>
            <div>
                <div className="login-form">Sign In</div>
                {isLoggedIn ? <div>User is successfully logged in</div>: renderForm}
            </div>
        </div>
    )
};
