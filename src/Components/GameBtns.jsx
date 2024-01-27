import React from "react";
import { SWITCH } from "./GameWithHOC";
const GameBtns = ({ handleBtnClick, attempt }) => {
  let isDisable = attempt >= 0 ? false : true;
  return (
    <div id="select_btn">
      <button
        disabled={isDisable}
        className="btn head"
        onClick={() => {
          handleBtnClick(SWITCH.HEAD);
        }}
      >
        HEAD
      </button>
      <button
        disabled={isDisable}
        className="btn tell"
        onClick={() => {
          handleBtnClick(SWITCH.TELL);
        }}
      >
        TELL
      </button>
    </div>
  );
};

export default GameBtns;
