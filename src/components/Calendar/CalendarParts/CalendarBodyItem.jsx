import React from "react";
import classes from "./CalendarBodyItem.module.css";
import { Link } from "react-router-dom";

const CalendarBodyItem = ({ day, type }) => {
  console.log(type);
  console.log(day);
  const typeDayClasses = `${classes.item} ${classes[`${type}`]}`;
  return (
    <Link to={`day_${day}`}>
      <li className={typeDayClasses}>{day}</li>
    </Link>
  );
};

export default CalendarBodyItem;
