import React, { useState } from "react";
import Answer from "./Answer";

function Field(props) {
  let finalAnswers = props.answers.map((instance) => {
    return (
      <Answer
        holdField={sendDataIntermediary}
        ans={instance.answer}
        isHeld={instance.isHeld}
        finished={props.finished}
        correctAns={props.correctAns === instance.answer}
      />
    );
  });

  function sendDataIntermediary(answer) {
    sendData(props.question, answer);
  }

  function sendData(question, answer) {
    props.holdField(question, answer);
  }

  return (
    <div className="oneField">
      <p className="question">{props.question}</p>
      <p className="answers">{finalAnswers}</p>
      <div className="line"></div>
    </div>
  );
}

export default Field;
