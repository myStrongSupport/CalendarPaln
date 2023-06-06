import { useEffect, useState } from "react";
import classes from "./CalendarBody.module.css";
import CalendarBodyItem from "./CalendarBodyItem";
import { CalendarActions } from "../../../store/CalendarSlice/CalendarSlice";
import { useDispatch, useSelector } from "react-redux";

const CalendarBody = () => {
  // Get Days
  const days = useSelector((state) => state.cal.days);
  const date = useSelector((state) => state.cal);
  const [curM, setCurM] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setCurM({ year: date.year, month: date.month });
  }, []);

  // Puplich days in li
  const daysEl = days.map((day, index) => (
    <CalendarBodyItem
      key={index}
      day={day.day}
      type={day.typeDay}
      curDate={curM}
    />
  ));

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
      <ul className={classes.days}>{daysEl}</ul>
    </div>
  );
};

export default CalendarBody;
