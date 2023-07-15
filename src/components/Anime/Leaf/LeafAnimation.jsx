import React from "react";
import classes from "./LeafAnimation.module.css";
import l1 from "../../../assets/Image/l1.png";
import l2 from "../../../assets/Image/l2.png";
import l3 from "../../../assets/Image/l3.png";
import l4 from "../../../assets/Image/l4.png";
import l5 from "../../../assets/Image/l5.png";

const LeafAnimation = (props) => {
  const images = [l1, l2, l3, l4, l5];
  const imageIndex = props.id % images.length;
  const imageSrc = images[imageIndex];

  return (
    <>
      <img
        src={imageSrc}
        className={classes.leafFalling}
        id={`item${props.id}`}
        alt=""
        style={props.style}
        width={`${props.style.fontSize}px`}
      />
    </>
  );
};

export default LeafAnimation;
