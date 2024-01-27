import React from 'react'
import Navigator from './Navigator';
import TossHome from './../Pages/TossHome';

const Layer = ({children}) => {
  return (
    <div id='container'>
      <div id='app_header'>
        <Navigator value="Toss" style="navigate toss" to="/" />
        <Navigator value="Lucky Game" style="navigate lucky_game" to="/Game"/>
      </div>
      <main>{children}</main>
      <span id='dev_label'>
        Make By Epti
      </span>
    </div>
  );
}

export default Layer