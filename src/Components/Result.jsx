import React from 'react'
import { SWITCH } from './GameWithHOC';


const Result = ({point}) => {
  let dynamicStyle = point === SWITCH.HEAD ? "head" : point === SWITCH.TELL ? "tell" : null
  return (
    <div id='result_area'>
      <span className={`${dynamicStyle} poiner`}>{point ? point : "?"}</span>
    </div>
  );
}

export default Result