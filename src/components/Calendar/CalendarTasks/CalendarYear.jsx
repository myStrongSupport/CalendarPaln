import React from "react";
import classes from "./CalendarYear.module.css";
const CalendarYear = () => {
  return (
    <div className={classes["calendar-day-task"]}>
      <div className={classes.year}>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>4</span>
        </div>
        <div>
          <span>0</span>
        </div>
        <div>
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarYear;
