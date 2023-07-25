import React from "react";
import classes from "./CalendarBodyItem.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const moment = require("moment-jalaali");
const currentDate = moment;

const CalendarBodyItem = ({ day, type, curDate }) => {
  // Get Time
  const time = useSelector((state) => state.cal);
  const currentDay = time.day;

  // Get Day of Week

  const weeks = {
    Saturday: "شنبه",
    Sunday: "یک شنبه",
    Monday: "دوشنبه",
    Tuesday: "سه شنبه ",
    Wednesday: "چهار شنبه ",
    Thursday: "پنچ شنبه ",
    Friday: "جمعه",
  };

  const dayOfWeeks =
    weeks[
      currentDate(
        `${time.year}/${time.month + 1}/${day}`,
        "jYYYY/jMM/jDD"
      ).format("dddd")
    ];

  // Check Classes
  const currentDayClasses =
    type === "current-month" &&
    `${curDate.year}${curDate.month}${currentDay}` ===
      `${curDate.year}${time.month}${day}`
      ? classes["current"]
      : null;

  // onClickPlaySound
  const onclickPlaySound = (e) => {
    // console.log(e.target);
  };
  return (
    <Link
      className={classes[`${type}`]}
      to={`${time.year}_${time.month + 1}_${day}_${dayOfWeeks}`}
      onClick={onclickPlaySound}
    >
      <li className={`${classes.item} ${classes[type]} ${currentDayClasses}`}>
        {day}
      </li>
    </Link>
  );
};

export default CalendarBodyItem;
