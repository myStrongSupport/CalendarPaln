import React, { useState } from "react";
import classes from "./Calendar.module.css";
import CalendarTask from "./CalendarTasks/CalendarTask";
import CalendarYear from "./CalendarTasks/CalendarYear";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, animate, motion } from "framer-motion";
import LeafFalling from "../Anime/LeafFalling";

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
        </div>
        <div className="animations">
          <LeafFalling sentence="This is test for " />
          <LeafFalling sentence="This" zIndex="Top" />
        </div>
        <CalendarYear />
        {/* <CalendarTask /> */}
      </div>
    </motion.section>
  );
};

export default Calendar;
