import React from "react";
import "../styles/Counter.scss";

const Counter = ({ counter }) => {
  return <div className="counter">{counter}</div>;
};

export default Counter;
