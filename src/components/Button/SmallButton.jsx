import React, { useState } from "react";
import ButtonStyles from "./Button.module.css";
import SmallButtonStyles from "./SmallButton.module.css";

function SmallButton({ width, height, children }) {
  return (
    <button
      style={{ width, height }}
      className={`${ButtonStyles.button} ${SmallButtonStyles.button}`}
    >
      <p>{children} </p>
    </button>
  );
}

export default SmallButton;
