import React from "react";
import { IoIosRefresh } from "react-icons/io";
const Reset = ({ resetApp }) => {
  return (
    <button type="button" id="reset_btn" onClick={resetApp}>
      <IoIosRefresh />
    </button>
  );
};

export default Reset;
