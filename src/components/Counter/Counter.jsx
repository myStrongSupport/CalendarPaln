import React from "react";
import ZekerDay from "../Zeker/ZekerDay/ZekerDay";
import classes from "./Counter.module.css";
import CounterDesgin from "./CounterDesgin";
const Counter = () => {
  return (
    <section className={classes.counter}>
      <CounterDesgin />
      {/* Zeker's Day */}
      <ZekerDay />
      {/* Ravayat */}
      <div></div>
    </section>
  );
};

export default Counter;
