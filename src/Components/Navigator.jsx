import React from "react";
import { NavLink } from "react-router-dom";
const Navigator = ({ value, style, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `${style} active` : `${style}`)}
    >
      {value}
    </NavLink>
  );
};

export default Navigator;
