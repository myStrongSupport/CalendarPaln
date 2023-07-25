import React from "react";
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";
import classes from "./RealCalendar.module.css";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import SideBarVideo from "../../Video/SideBarVideo";

let contolDelay = true;
const RealCalendar = () => {
  const [ref, { height }] = useMeasure();
  const [sidebarIsOpen, setSideBarIsOpen] = useState(false);

  const firstAnimate = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      height: height + 90,

      transition: {
        type: "spring",
        duration: 1,
        delay: contolDelay ? 4 : 0.5,
        height: {
          delay: 0.1,
        },
      },
    },
    exit: {
      y: 100,
      opacity: 0,
    },
  };

  useEffect(() => {
    if (contolDelay) {
      setTimeout(() => {
        contolDelay = false;
      }, 4000);
      return;
    }
  }, []);
  const onSideBarHandler = () => {
    setSideBarIsOpen((prev) => !prev);
  };

  return (
    <MotionConfig>
      <AnimatePresence>{sidebarIsOpen && <SideBarVideo />}</AnimatePresence>
      <motion.div
        variants={firstAnimate}
        initial="hidden"
        animate="show"
        exit="exit"
        className={classes.calendar}
      >
        <div ref={ref}>
          <div className={classes.bgChange}>
            <div onClick={onSideBarHandler}></div>
          </div>
          <CalendarHead />
          <CalendarBody />
        </div>
      </motion.div>
    </MotionConfig>
  );
};

export default React.memo(RealCalendar);
