import React, { useState } from "react";
import classes from "./Calendar.module.css";
import CalendarTask from "./CalendarTasks/CalendarTask";
import CalendarYear from "./CalendarTasks/CalendarYear";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Calendar = () => {
  const location = useLocation();
  const AnimatedOutlet = () => {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet}</>;
  };

  return (
    <section className={classes["calendar-container"]}>
      <div className={classes.container}>
        <div className={classes["calendar-image"]}>
          <CalendarYear />
          <div className={classes.wrapper}>
            <AnimatePresence mode="wait">
              <motion.div layout key={location.pathname}>
                <AnimatedOutlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <CalendarTask />
      </div>
    </section>
  );
};

export default Calendar;
