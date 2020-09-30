import React from "react";
import Toolbar from "../../components/toolbar/toolbar";
const Layout = (props) => {
  return (
    <div>
      <Toolbar />
      <div>{props.children}</div>
    </div>
  );
};
export default Layout;
