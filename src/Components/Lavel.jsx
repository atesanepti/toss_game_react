import React, { useEffect } from 'react'
import { IoIosClose } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";
const Lavel = ({ counter }) => {

  return (
    <div id="lavel_outer">
      {counter.map((counter) => (
        <div key={Math.random()}>
          {counter === "w" ? (
            <IoIosCheckmark id="win_mark" />
          ) : counter === "l" ? (
            <IoIosClose id="lost_mark" />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Lavel