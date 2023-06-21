import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import apiURL from "../api";

export default function Header({setState, userId, setUserId}) {

  const [username, setUsername] = useState("")

  useEffect(() => {
    getUsername(userId)
  }, [userId])

  async function getUsername(userId){
    if(userId !== null){
    try {
      console.log('id',userId);
      const res = await fetch(`${apiURL}/users/${userId}`);
      const data = await res.json();
      console.log(data)
      setUsername(data.username);
    } catch (error) {
      console.log(error);
    }
  }
  }
  return (
    <>
      <div className="top-bar">
        <HomeIcon
          color="primary"
          onClick={() => {
            setState("loginForm");
            setUserId(null);
          }}
          className="top-button"
        >
          Home
        </HomeIcon>
        {userId == null ?  <p>Not logged in</p> : <p> Logged in as: {username} </p>}
      </div>
    </>
  );
}
