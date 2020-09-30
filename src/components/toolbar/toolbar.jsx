import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./toolbar.module.css";
const Toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <div>
        <NavLink to="/" exact activeClassName={classes.active}>
          Clients List
        </NavLink>
      </div>
      <div>
        <NavLink to="/registration" activeClassName={classes.active}>
          Registration
        </NavLink>
      </div>

      <div>
        <NavLink to="/authorinfo" activeClassName={classes.active}>
          Author
        </NavLink>
      </div>
    </div>
  );
};
export default Toolbar;
