import React from "react";

export default function Play({setState}) {

  function handleClick(e) {
    e.preventDefault();
    setState("pickingQuiz")
}

  return (
    <>
      <button className="Play-btn" onClick={handleClick}>Play</button>
    </>
  );
}
