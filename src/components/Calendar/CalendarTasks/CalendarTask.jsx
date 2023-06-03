import React, { useEffect, useState } from "react";
import classes from "./CalendarTask.module.css";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem.jsx";
const CalendarTask = () => {
  const myTasks = useSelector((state) => state.tasks.tasks);

  const TaskItems = myTasks.map((task, index) => {
    return <TaskItem key={index} infoTask={task} />;
  });
  useEffect(() => {
    fetch("https://taskcalndender-default-rtdb.firebaseio.com/tasks.json", {
      method: "PUT",
      body: JSON.stringify(myTasks),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [myTasks]);

  return (
    <>
      <div className={classes["calendar-tasks-mention"]}>
        <div className={classes["calendar-mention"]}>
          <h4>یارب العالمین</h4>
        </div>
        <div className={classes["show-tasks"]}>{TaskItems}</div>
      </div>
    </>
  );
};

export default CalendarTask;
