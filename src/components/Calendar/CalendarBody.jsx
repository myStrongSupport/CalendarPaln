import { useEffect } from "react";
import classes from "./CalendarBody.module.css";
import { CalendarActions } from "../../store/CalendarSlice/CalendarSlice";
import { useDispatch, useSelector } from "react-redux";
const CalendarBody = () => {
  const dispatch = useDispatch();
  // Get Days
  const days = useSelector((state) => state.cal.days);

  // Puplich days in li
  const daysEl = days.map((day, index) => <li key={index}>{day}</li>);

  useEffect(() => {
    // Call to get Days
    // dispatch(CalendarActions.renderCalendar());
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
