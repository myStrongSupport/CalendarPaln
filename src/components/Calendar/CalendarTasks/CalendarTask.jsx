import React from "react";
import { BiEdit } from "react-icons/bi";
import classes from "./CalendarTask.module.css";
const CalendarTask = () => {
  return (
    <>
      <div className={classes["calendar-tasks-mention"]}>
        <div className={classes["calendar-mention"]}>
          <h4>یارب العالمین</h4>
        </div>
        <div className={classes["show-tasks"]}>
          <div className={classes["show-task-date"]}>
            <h3>17</h3>
            <div className={classes["task-task-date_day"]}>
              <h4>امروز</h4>
              <p>شما 3 فعالیت دارید </p>
            </div>
          </div>
          <ul className={classes["tasks-list"]}>
            <li className={classes["task-list-item"]}>
              <div className={classes["task-info"]}>
                <span>{`14:00 - 12:00`}</span>
                <h4>پیداه روی</h4>
                <p>قرار ملاقات در کوه </p>
              </div>
              <div className={classes["task-actions"]}>
                <BiEdit />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CalendarTask;
