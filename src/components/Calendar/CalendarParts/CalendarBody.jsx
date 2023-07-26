import { useEffect, useState } from "react";
import classes from "./CalendarBody.module.css";
import CalendarBodyItem from "./CalendarBodyItem";
import { CalendarActions } from "../../../store/CalendarSlice/CalendarSlice";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const CalendarBody = () => {
  const [lDays, setLdays] = useState([]);

  const item = {
    hidden: { opacity: 0, y: 100, scale: 2 },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
    exit: { opacity: 0 },
  };

  // Get Days
  const days = useSelector((state) => state.cal.days);
  const date = useSelector((state) => state.cal);
  const [curM, setCurM] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setCurM({ year: date.year, month: date.month });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLdays(days);
    }, 5000);

    return () => clearTimeout(timer);
  }, [days]);

  useEffect(() => {
    setLdays([]);
    const timer = setTimeout(() => {
      setLdays(days);
    }, 100);
    return () => clearTimeout(timer);
  }, [date.month, days]);

  // Puplich days in li

  useEffect(() => {
    // Call to get Days
    dispatch(CalendarActions.rendarCalendarPersian());
  }, [dispatch]);

  return (
    <div className={classes.calendar}>
      <ul className={classes.weeks}>
        <li>شنبه</li>
        <li>یک شنبه </li>
        <li>دوشنبه </li>
        <li>سه شنبه </li>
        <li>چهارشنبه</li>
        <li>پنچ شنبه </li>
        <li>جمعه</li>
      </ul>

      <motion.ul className={classes.days}>
        <AnimatePresence>
          {lDays.map((day, index) => (
            <motion.div
              variants={item}
              key={index}
              initial="hidden"
              animate="show"
              custom={index}
            >
              <CalendarBodyItem
                day={day.day}
                type={day.typeDay}
                curDate={curM}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default CalendarBody;
