import React, { useEffect } from "react";
import classes from "./RecentTask.module.css";
import { MotionConfig, useAnimate, usePresence } from "framer-motion";
import useMeasure from "react-use-measure";
const RecentTask = (props) => {
  const [isPresent, safeToRemove] = usePresence();
  const [ref, { height }] = useMeasure();

  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        await animate(
          scope.current,
          { y: [100, 0], opacity: [0, 1] },
          {
            duration: 1,
            delay: 0.5 * props.id,
            type: "spring",
            damping: 12,
            stiffness: 90,
          }
        );
        await animate();
      };
      enterAnimation();
    }
  }, [isPresent, scope, animate, props.id]);

  useEffect(() => {
    const reChangeHieght = async () => {
      await animate(
        scope.current,
        { height: height + 45 },
        {
          duration: 1,
        }
      );
    };

    reChangeHieght();
  }, [height, scope, animate]);

  useEffect(() => {
    const intervalId = setInterval(() => {}, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPresent]);
  return (
    <MotionConfig>
      <li ref={scope} className={classes.item}>
        <div className={classes.title}>
          <span
            className={classes.color}
            style={{ background: `${props.color}` }}
          ></span>
          <div className={classes["title-time"]}>
            <h3>{props.title}</h3>
            <div className={classes.time}>09:08-08:00</div>
          </div>
        </div>
        <p ref={ref}>{props.paragraph}</p>
      </li>
    </MotionConfig>
  );
};

export default RecentTask;
