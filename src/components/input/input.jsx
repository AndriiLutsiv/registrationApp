import React from "react";
import classes from "./input.module.css";
const Input = ({ input, label, type, meta: { touched, error, warning } }) => {
  const showError = error && touched;
  return (
    <>
      <input
        className={showError ? classes.error : classes.normal}
        {...input}
        placeholder={showError ? error : label}
        type={type}
      />
    </>
  );
};
export default Input;
