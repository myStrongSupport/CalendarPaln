import React from "react";
import classes from "./Calendar.module.css";
import RealCalendar from "./CalendarParts/RealCalendar";
import CalendarTask from "./CalendarTasks/CalendarTask";
import CalendarYear from "./CalendarTasks/CalendarYear";

const Calendar = () => {
  return (
    <section className={classes["calendar-container"]}>
      <div className={classes.container}>
        {/* Calendar */}
        <div className={classes.wrapper}>
          <RealCalendar />
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
