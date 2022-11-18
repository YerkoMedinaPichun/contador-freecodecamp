import React from "react";
import "../styles/Button.scss";

const Button = ({ text, isButtonClick, handleClick }) => {
  return (
    <button
      className={isButtonClick ? "button-click" : "button-reset"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
