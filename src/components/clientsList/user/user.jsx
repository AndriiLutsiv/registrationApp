import React from "react";
import classes from "./user.module.css";
const User = (props) => {
  return (
    <div className={classes.User}>
      <div>{props.userName}</div>
      <div>{props.date}</div>
    </div>
  );
};
export default User;
// store.getState().userReducer
