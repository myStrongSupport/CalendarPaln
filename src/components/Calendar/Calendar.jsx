import React, { useEffect } from "react";
import classes from "./Calendar.module.css";
import CalendarTask from "./CalendarTasks/CalendarTask";
import CalendarYear from "./CalendarTasks/CalendarYear";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
let init = true;
const Calendar = ({ element }) => {
  const myTasks = useSelector((state) => state.tasks.tasks);

  return (
    <section className={classes["calendar-container"]}>
      <div className={classes.container}>
        {/* Calendar */}
        <div className={classes.wrapper}>
          <Outlet />
        </div>
        {/* Date Design */}
        <div className={classes["calendar-image"]}>
          <CalendarTask />
          <CalendarYear />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
