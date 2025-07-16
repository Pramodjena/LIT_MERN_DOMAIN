import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { data } from "../../assets/data.js";
import "./Quiz.css";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const currentQuestion = data[index];
  const [width, height] = useWindowSize(); // to auto-adjust confetti

  const handleOptionClick = (optionIndex) => {
    setSelectedOption((prev) => (prev === optionIndex ? null : optionIndex));
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.ans) {
      setScore(score + 1);
    }

    if (index < data.length - 1) {
      setIndex(index + 1);
      setSelectedOption(null);
    } else {
      setResult(true); // 🎉 Trigger result + confetti
    }
  };

  const resetQuiz = () => {
    setIndex(0);
    setSelectedOption(null);
    setScore(0);
    setResult(false);
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />

      {result ? (
        <>
          <Confetti width={width} height={height} numberOfPieces={300} />
          <h2 className="congratsText">🎉 Congratulations!</h2>
          <p className="scoreText">
            You scored <strong>{score}</strong>/<strong>{data.length}</strong>
          </p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </>
      ) : (
        <>
          <h2 className="question">
            {index + 1}. {currentQuestion.question}
          </h2>
          <ul>
            {[1, 2, 3, 4].map((i) => (
              <li
                key={i}
                className={selectedOption === i ? "selected" : ""}
                onClick={() => handleOptionClick(i)}
              >
                {currentQuestion[`option${i}`]}
              </li>
            ))}
          </ul>
          <button onClick={handleNext} disabled={selectedOption === null}>
            {index === data.length - 1 ? "Finish" : "Next"}
          </button>
          <div className="index">
            Question {index + 1} of {data.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
