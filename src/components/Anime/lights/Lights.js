import React from "react";
import classes from "./Light.module.css";
const Lights = () => {
  let animationDelay = "0s";
  let fontSize = "100px";
  let Arry = Array.from("This is test");
  let light = Arry.map((e, i) => {
    animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
    fontSize = `${Math.random() * 10 + 10}px`;
    let style = {
      animationDelay,
      fontSize,
    };
    return <span className={classes.light} key={i} id={i} style={style}></span>;
  });
  return <div className={classes.parentLight}>{light}</div>;
};

export default Lights;
