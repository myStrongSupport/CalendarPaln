import React from "react";
import classes from "./CalendarYear.module.css";
import { useSelector } from "react-redux";
import { motion, MotionConfig } from "framer-motion";
import RecentlyTasks from "./RecentlyTasks/RecentlyTasks";
const CalendarYear = () => {
  const date = useSelector((state) => state.cal);
  const shamsiMonths = [
    { name: "فروردین", value: 0 },
    { name: "اردیبهشت", value: 1 },
    { name: "خرداد", value: 2 },
    { name: "تیر", value: 3 },
    { name: "مرداد", value: 4 },
    { name: "شهریور", value: 5 },
    { name: "مهر", value: 6 },
    { name: "آبان", value: 7 },
    { name: "آذر", value: 8 },
    { name: "دی", value: 9 },
    { name: "بهمن", value: 10 },
    { name: "اسفند", value: 11 },
  ];

  const month = shamsiMonths[date.month].name;
  return (
    <MotionConfig>
      <div className={classes["calendar-day-task"]}>
        <motion.div className={classes.container}>
          <div className={classes.date}>
            <motion.h1
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                delay: 1,
              }}
              className={classes.year}
            >
              <div className={classes.box}>
                <span className={classes.text}>
                  <span className={classes.firstLetter}>0</span>2
                </span>
              </div>
            </motion.h1>
            <motion.div className={classes["month-day"]}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: [0, 0.1, 0.5, 1], y: 0 }}
                transition={{
                  type: "spring",
                  delay: 2,
                }}
                className={classes.day}
              >
                {date.day}
              </motion.p>
              <motion.p
                layout
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: [0, 0.1, 0.5, 1], x: 0 }}
                transition={{
                  type: "spring",
                  delay: 1.5,
                }}
                exit={{
                  x: -100,
                  transition: {
                    duration: 3,
                  },
                }}
                key={month}
                className={classes.month}
              >
                {month}
              </motion.p>
            </motion.div>
          </div>
          <RecentlyTasks />
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default CalendarYear;
