import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";
import classes from "./RealCalendar.module.css";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { useState } from "react";
import SideBarVideo from "../../Video/SideBarVideo";

const RealCalendar = () => {
  const [ref, { height }] = useMeasure();
  const [sidebarIsOpen, setSideBarIsOpen] = useState(false);

  const firstAnimate = {
    hidden: {
      x: 1000,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      height: height + 90,

      transition: {
        x: { delay: 0.4 },
      },
    },
    exit: {
      x: 1000,
    },
  };

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
            <span onClick={onSideBarHandler}></span>
          </div>
          <CalendarHead />
          <CalendarBody />
        </div>
      </motion.div>
    </MotionConfig>
  );
};

export default RealCalendar;
