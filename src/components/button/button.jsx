import React from "react";
import classes from "./button.module.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={classes.CustomButton}>
      {" "}
      {props.children}{" "}
    </button>
  );
};
export default Button;
