import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={props.isOutline ? "outline-btn" : "primary-btn"}>
      {props.icons}
      {props.text}
      
    </button>
  );
}

export default Button;
