import React, { useEffect } from "react";
import { useState } from "react";
import Result from "./Result";
import GameBtns from "./GameBtns";
export const SWITCH = {
  HEAD: "head",
  TELL: "tell",
};
const GameWithHOC = ({ checkWinning, attempt }) => {
  const [point, setPoint] = useState(null);
  const handleBtnClick = (userInput = null) => {
    let randomNumber = (Math.random() * 100).toFixed();
    if (randomNumber % 2 == 0) {
      setPoint((prev) => {
        checkWinning(userInput, SWITCH.HEAD);
        return SWITCH.HEAD;
      });
    } else {
      setPoint((prev) => {
        checkWinning(userInput, SWITCH.TELL);
        return SWITCH.TELL;
      });
    }
  };
  return (
    <div>
      <Result point={point} />
      <GameBtns handleBtnClick={handleBtnClick} attempt={attempt} />
    </div>
  );
};

export default GameWithHOC;
