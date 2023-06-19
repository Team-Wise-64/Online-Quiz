import React, {useState} from "react";
import users from '../../seed/userData';
import apiURL from "../api";

export default function LogIn({setState}){
    const [error, setError] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [nextUser, setNextUser] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const errors = {
        username: "Invalid username",
        password: "Invalid password"
    };

    const renderError = (name) => {
        name === error.name && (
            <div className="error">{error.message}</div>
        );
    };

    async function handleSubmit(e){
        e.preventDefault();
        setState("loginForm");
        let {userName, passWord} = document.forms[0];
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
        setNextUser(data);
       }catch(err){
        console.error('Error is: ' + err);
       }
        if(nextUser) {
            if(nextUser.password !== passWord.value){
                setError({name: "passWord", message: errors.password});
            }else{
                setIsLoggedIn(true);
            }
        }else{
            setError({name: "userName", message: errors.username})
        }
    };
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input">
                <label>Username</label>
                <input type="text" name="username" required/>
                {renderError("userName")}
                </div>
                <div className="input">
                <label>Password</label>
                <input type="password" name="password" required/>
                {renderError("passWord")}
                </div>
                <div>
                    <button onClick={() => {setState("landing")}}>Or log in as guest</button>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );

    return(
        <div>
            <div>
                <div>Sign In</div>
                {isLoggedIn ? <div>User is successfully logged in</div>: renderForm}
            </div>
        </div>
    )
};
