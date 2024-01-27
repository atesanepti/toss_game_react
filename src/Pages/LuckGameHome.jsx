import React, { useEffect, useState } from "react";
import Lavel from "./../Components/Lavel";
import Reset from "./../Components/Reset";
import GameWithHOC from "../Components/GameWithHOC";
import Mark from "./../Components/Mark";

const LuckGameHome = () => {
  const [counter, setCounter] = useState(Array(5).fill(null));
  const [attempt, setAttempt] = useState(5);
  const [sumOfMark, setSumOfMark] = useState(0);
  const checkWinning = (userInput, result) => {
    if (userInput === result) {
      setCounter((prev) => {
        const newCounter = [...prev];
        newCounter[attempt] = "w";
        return newCounter;
      });
    } else {
      setCounter((prev) => {
        const newCounter = [...prev];
        newCounter[attempt] = "l";
        return newCounter;
      });
    }
  };
  useEffect(() => {
    setAttempt(attempt - 1);
    const filtedArray = counter.filter((counter) => {
      if (counter === "w") return counter;
    });
    if (filtedArray) {
      setSumOfMark(filtedArray.length);
    }
  }, [counter]);

  const resetApp = () => {
    setCounter(Array(5).fill(null));
    setAttempt(5);
    setSumOfMark(0);
  };

  return (
    <div>
      <div id="header_game">
        <h4 id="title_luck">Test Your Luck</h4>
        <Reset resetApp={resetApp} />
      </div>
      <Lavel counter={counter} />
      <Mark sumOfMark={sumOfMark} />
      <GameWithHOC checkWinning={checkWinning} attempt={attempt} />
    </div>
  );
};

export default LuckGameHome;
