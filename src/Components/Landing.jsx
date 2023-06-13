import React from "react";

function Landing(props) {
  return (
    <body>
      <main>
        <h1>Quizzical</h1>
        <p>Welcome to the ultimate Math Quizz</p>
        <button className="landingButton" onClick={props.start}>
          Start Quizz
        </button>
      </main>
    </body>
  );
}

export default Landing;
