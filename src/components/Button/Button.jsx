import React, { useState } from "react";
import ButtonStyles from "./Button.module.css";

function Button({ children, className, fillFlex }) {
  return (
    <button
      className={`${ButtonStyles.button} ${
        fillFlex ? "" : ButtonStyles.fillFlex
      } ${className}`}
    >
      <p>{children}</p>
      <div className={ButtonStyles.arrowContainer}>z</div>
    </button>
  );
}

export default Button;
