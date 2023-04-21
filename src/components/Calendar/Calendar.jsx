import React from "react";
import classes from "./Calendar.module.css";
import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

const Calendar = () => {
  return (
    <section className={classes["calendar-container"]}>
      <div className={classes.container}>
        {/* Calendar */}
        <div className={classes.wrapper}>
          <div>
            <CalendarHead />
            <CalendarBody />
          </div>
        </div>
        {/* Date Design */}
        <div className={classes["calendar-image"]}>
          <div className={classes["calender-tasks-mentions"]}>
            <div className="calendar-mention">
              <div className="calendar-mention-day">
                <h4>سه شنبه</h4>
                <span>000/100</span>
              </div>
              <p className={classes.mention}></p>
            </div>
          </div>
          <div className="calendar-day-task"></div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
