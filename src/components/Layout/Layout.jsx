import React from "react";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={classes.layout}>
      {/* <div className="video">
        <video src={Video} controls autoPlay></video>
      </div> */}
      {props.children}
    </div>
  );
};

export default Layout;
