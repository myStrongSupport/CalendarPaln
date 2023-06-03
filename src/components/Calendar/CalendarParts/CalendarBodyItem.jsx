import React from "react";
import classes from "./CalendarBodyItem.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CalendarBodyItem = ({ day, type, curDate, onGetDay }) => {
  const time = useSelector((state) => state.cal);
  const currentDay = time.day;

  const typeDayClasses = `${classes.item} ${classes[`${type}`]} ${
    `${curDate.year}${curDate.month}${currentDay}` ===
    `${curDate.year}${time.month}${day}`
      ? classes["current"]
      : null
  }`;
  return (
    <Link
      className={classes[`${type}`]}
      to={`${time.year}_${time.month + 1}_${day}`}
      onClick={onGetDay}
    >
      <li className={typeDayClasses}>{day}</li>
    </Link>
  );
};

export default CalendarBodyItem;
