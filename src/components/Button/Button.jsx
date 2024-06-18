import React from "react";
import ButtonStyles from "./Button.module.css";

function Button({ children, className, fillFlex, link, name_target }) {
  return (
    <a
      rel="noopener noreferrer"
      href={link}
      target="_blank"
      className={`${name_target} ${ButtonStyles.button} ${
        fillFlex ? "" : ButtonStyles.fillFlex
      } ${className}`}
    >
      <p>{children}</p>
      <div className={ButtonStyles.arrowContainer}>z</div>
    </a>
  );
}

export default Button;
