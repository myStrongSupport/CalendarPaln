import React from "react";
import LeafAnimation from "./LeafAnimation";
import classes from "./LeafFalling.module.css";
const LeafFalling = (props) => {
  let animationDelay = "0s";
  let fontSize = "100px";
  let Arry = Array.from(props.sentence);
  let Leaves = Arry.map((e, i) => {
    animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
    fontSize = `${Math.random() * 500 + 10}px`;
    let style = {
      animationDelay,
      fontSize,
    };
    return <LeafAnimation key={i} id={i} style={style} />;
  });
  const zIndexC = `${classes.leaf} ${
    props.zIndex === "Top" ? classes.top : classes.bottom
  }`;
  return (
    <div
      className={zIndexC}
      // style={{ left: `${props.left}%`, background: "red" }}
      style={{
        background: "red",
        zIndex: 999,
      }}
    >
      {Leaves}
    </div>
  );
};

export default LeafFalling;
