import React, { useState, useEffect, useRef } from "react";
import classes from "./CounterDesign.module.css";
const CounterDesgin = () => {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const circleRef = useRef(null);

  const onCountHandler = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (count <= 100) {
      const circumference = 2 * Math.PI * circleRef.current.r.baseVal.value;
      const progressValue = (count / 100) * circumference;
      setProgress(progressValue);
      circleRef.current.style.strokeDasharray = `${progress} ${circumference}`;
    }
  }, [count, progress]);

  return (
    <div className={classes.counter}>
      <div className={classes["counter-circle"]} onClick={onCountHandler}>
        <div className={classes.number}>{count}</div>
        <svg className={classes["progress-ring"]} width="100%" height="100%">
          <circle
            className={classes["progress-ring__circle"]}
            stroke="#000"
            strokeWidth="2"
            fill="transparent"
            r="150"
            cx="50%"
            cy="50%"
            ref={circleRef}
          />
        </svg>
        <div className={classes.circle}></div>
      </div>
    </div>
  );
};

export default CounterDesgin;
