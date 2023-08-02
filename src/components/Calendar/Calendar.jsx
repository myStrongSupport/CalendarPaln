import React, { useState } from "react";
import classes from "./Calendar.module.css";
import CalendarEffect from "./CalendarEffect";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import LeafFalling from "../Anime/LeafFalling";
import RealCalendar from "../Calendar/CalendarParts/RealCalendar";
import CalendarYear from "./CalendarTasks/CalendarYear";

const Calendar = () => {
  const location = useLocation();
  const AnimatedOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet}</>;
  };
  const zoomTime = {
    animate: {
      transition: {
        delay: 4,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  // Memo

  // Handels

  return (
    <motion.section
      variants={zoomTime}
      initial="init"
      animate="animate"
      className={classes["calendar-container"]}
    >
      <div className={classes.container}>
        <div className={classes["calendar-image"]}>
          <div className={classes.wrapper}>
            <AnimatePresence mode="wait">
              <motion.div layout key={location.pathname}>
                <AnimatedOutlet />
              </motion.div>
            </AnimatePresence>
          </div>

          <LeafFalling sentence="This is test for me" />
        </div>
        <CalendarEffect />
      </div>
    </motion.section>
  );
};

export default React.memo(Calendar);
