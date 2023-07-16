import React, { useEffect } from "react";
import classes from "./RecentTask.module.css";
import { MotionConfig, useAnimate, usePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
const RecentTask = (props) => {
  const [ref, { height }] = useMeasure();

  const [scope, animate] = useAnimate();
  const initAnime = {
    animate: {
      opacity: [0, 1],
      y: [100, 0],
      transition: {
        type: "spring",
        damping: 12,
        duration: 4,
        delay: props.id * 0.5,
      },
    },
  };

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

  return (
    <MotionConfig>
      <motion.li
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        layout
        variants={initAnime}
        whileInView="animate"
        transition={{
          type: "spring",
        }}
        viewport={{ once: true }}
        ref={scope}
        className={classes.item}
      >
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
      </motion.li>
    </MotionConfig>
  );
};

export default RecentTask;
