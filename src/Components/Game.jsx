import React, { useState } from "react";
import { useEffect } from "react";
import Answer from "./Answer";
import Field from "./Field";

function Game(props) {
  // Data fetched from API
  const [field, setField] = useState(props.data);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  console.log(field);
  let allFields = field.map((instance) => {
    return (
      <Field
        question={instance.question}
        answers={instance.answers}
        holdField={holdField}
        finished={finished}
        correctAns={instance.correctAnswer}
      />
    );
  });

  function holdField(selectedQuestion, selectedAnswer) {
    setField((oldField) => {
      return oldField.map((fieldObject) => {
        return fieldObject.question === selectedQuestion
          ? {
              ...fieldObject,
              answers: fieldObject.answers.map((answerObject) => {
                return answerObject.answer === selectedAnswer
                  ? { ...answerObject, isHeld: !answerObject.isHeld }
                  : { ...answerObject, isHeld: false };
              }),
            }
          : fieldObject;
      });
    });
  }

  function checkScore() {
    let currScore = 0;
    console.log("entered f");

    for (let i = 0; i < field.length; i++) {
      let currField = field[i];
      let currCorrectAnswer = currField.correctAnswer;
      let currAnswers = currField.answers;
      let selectedAnswer = "";
      for (let j = 0; j < currAnswers.length; j++) {
        if (selectedAnswer.length) {
          break;
        }
        let answerObject = currAnswers[j];
        if (answerObject.isHeld) {
          selectedAnswer = answerObject.answer;
        }
      }
      if (currCorrectAnswer === selectedAnswer) {
        currScore += 1;
      }
    }

    setScore(currScore);
    setFinished(true);
  }

  return (
    <body>
      <div className="quizzPage">
        <div>{allFields}</div>
        {finished ? (
          <div className="playAgain">
            <div className="youScored">You scored {score}/5</div>
            <button className="playAgainButton" onClick={props.playAgain}>
              Play again
            </button>
          </div>
        ) : (
          <button onClick={checkScore} className="checkAnswers">
            Check Answers
          </button>
        )}
      </div>
    </body>
  );
}

export default Game;
