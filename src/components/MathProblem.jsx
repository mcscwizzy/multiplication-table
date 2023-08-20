import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const MathProblem = ({
  hidden,
  multiplier,
  randomNumber,
  resetMathProblem,
}) => {
  const verifyAnswer = (selection) => {
    let correctAnswer = Number(multiplier) * Number(randomNumber);
    if (Number(selection.target.value) === correctAnswer) {
      alert("Correct!");
      resetMathProblem(multiplier);
    } else {
      alert("Good try! The correct answer is " + correctAnswer + ".");
      resetMathProblem(multiplier);
    }
  };

  const generateRandomArrayWithNumber = (length, min, max, numberToAdd) => {
    const randomArray = [];
    const randomIndex = Math.floor(Math.random() * (length + 1));
    for (let i = 0; i < length; i++) {
      if (i === randomIndex) {
        randomArray.push(numberToAdd);
      }
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomValue);
    }
    if (randomIndex === length) {
      randomArray.push(numberToAdd);
    }
    return randomArray;
  };

  let answer = Number(multiplier) * Number(randomNumber);
  let randomAnswers = generateRandomArrayWithNumber(3, 0, 144, Number(answer));

  if (!hidden) {
    return (
      <>
        <h1>
          {multiplier} x {randomNumber} = ?
        </h1>
        {randomAnswers.map((item) => (
          <Row>
            <Col className="p-1">
              <Button variant="primary" value={item} onClick={verifyAnswer}>
                {item}
              </Button>
            </Col>
          </Row>
        ))}
      </>
    );
  } else {
    return null;
  }
};

export default MathProblem;
