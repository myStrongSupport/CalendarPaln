import React from "react";
import classes from "./Zeker.module.css";
import ZekerItem from "./ZekerItem";

const Zeker = ({ zekerDay }) => {
  const ZD = zekerDay.map((item) => {
    return <ZekerItem key={item.id} day={item.day} mention={item.mention} />;
  });

  return (
    <section className={classes.zeker}>
      <ul className={classes["zeker-container"]}>{ZD}</ul>
    </section>
  );
};

export default Zeker;
