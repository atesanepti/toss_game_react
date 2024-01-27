import React, { useState } from "react";
import { SWITCH } from "../Components/GameWithHOC";
import Result from "./../Components/Result";
import GameBtns from "./../Components/GameBtns";

const TossHome = () => {
  const [point, setPoint] = useState(null);
  const handleBtnClick = (userInput = null) => {
    let randomNumber = (Math.random() * 100).toFixed();
    if (randomNumber % 2 == 0) {
      setPoint(SWITCH.HEAD);
    } else {
      setPoint(SWITCH.TELL);
    }
  };
  return (
    <div>
      <Result point={point} />
      <GameBtns handleBtnClick={handleBtnClick} attempt={null} />
    </div>
  );
};

export default TossHome;
