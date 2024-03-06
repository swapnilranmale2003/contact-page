import React from "react";
import "./Button.css";

function Button(props) {
  const { isOutline, icons, text, ...rest } = props;
  return (
    <button
      {...rest}
      className={isOutline ? "outline-btn" : "primary-btn"}
    >
      {icons}
      {text}
    </button>
  );
}

export default Button;
