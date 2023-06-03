import React from "react";
import classes from "./Calendar.module.css";
import CalendarTask from "./CalendarTasks/CalendarTask";
import CalendarYear from "./CalendarTasks/CalendarYear";
import { Outlet } from "react-router-dom";

const Calendar = ({ element }) => {
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
