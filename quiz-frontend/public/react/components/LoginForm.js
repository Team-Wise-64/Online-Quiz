import React, {useState} from "react";
import users from '../../seed/userData';
import apiURL from "../api";

export default function LogIn({setState}){
    const [error, setError] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [nextUser, setNextUser] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
                if(user.userName == username && user.password == password){
                    setState("landing");
                }
            }
            setNextUser(data);
        }catch(err){
            console.error('Error is: ' + err);
        }
    };
    const renderForm = (
        <div className="form">
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="input">
                <label>Username</label>
                <input type="text" name="username" required onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div className="input">
                <label>Password</label>
                <input type="password" name="password" required onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div>
                    <button onClick={() => {setState("landing")}}>Or log in as guest(Score not saved)</button>
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
                <div className="login-form">Sign In</div>
                {isLoggedIn ? <div>User is successfully logged in</div>: renderForm}
            </div>
        </div>
    )
};
