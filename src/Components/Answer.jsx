import React, { useState } from "react";

function Answer(props) {
  const ungoing = {
    backgroundColor: props.isHeld ? "#D6DBF5" : "#F5F7FB",
    border: props.isHeld ? "0px" : "1px solid #4d5b9e",
  };

  const done = {
    backgroundColor: props.correctAns
      ? "#94D7A2"
      : props.isHeld
      ? "#F8BCBC"
      : "#F5F7FB",
    border: props.correctAns
      ? "0px"
      : props.isHeld
      ? "0px"
      : "1px solid #4d5b9e",
    opacity: props.correctAns ? 1 : 0.4,
  };

  function handleClick() {
    props.holdField(props.ans);
  }
  return (
    <div
      className="answerBox"
      style={props.finished ? done : ungoing}
      onClick={handleClick}
    >
      <p className="ansValue">{props.ans}</p>
    </div>
  );
}

export default Answer;
