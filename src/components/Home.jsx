import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import MathProblem from "./MathProblem";

const Home = () => {
  const [hideMathProblem, setHideMathProblem] = useState(true);
  const [multiplier, setMultiplier] = useState(1);
  const [randomNumber, setRandomNumber] = useState(1);

  // state handlers
  const handleMultiplier = (item) => setMultiplier(item);
  const handleRandomNumber = (item) => setRandomNumber(item);
  const handleHideMathProblem = (item) => setHideMathProblem(item);

  const generateRandomNumber = () => {
    return (Math.random() * (12 - 0) + 0).toFixed(0);
  };

  const resetMathProblem = () => {
    handleRandomNumber(generateRandomNumber);
    handleHideMathProblem(false);
  };

  const generateMathProblem = (s) => {
    handleMultiplier(s.target.value);
    handleRandomNumber(generateRandomNumber);
    handleHideMathProblem(false);
  };
  return (
    <Container className="text-center shadow rounded">
      <Form>
        <p>Select your multiplier</p>
        <Form.Select
          name="formSelection"
          aria-label="Select multiplier"
          onChange={generateMathProblem}
          className="text-center"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </Form.Select>
      </Form>
      <MathProblem
        hidden={hideMathProblem}
        multiplier={multiplier}
        randomNumber={randomNumber}
        resetMathProblem={resetMathProblem}
      />
    </Container>
  );
};
export default Home;
