import React from "react";
import HomeIcon from "@mui/icons-material/Home";

export default function Header() {
  return (
    <>
      <div className="top-bar">
        <HomeIcon
          color="primary"
          onClick={() => {
            setState("landing");
          }}
          className="top-button"
        >
          Home
        </HomeIcon>
      </div>
    </>
  );
}
