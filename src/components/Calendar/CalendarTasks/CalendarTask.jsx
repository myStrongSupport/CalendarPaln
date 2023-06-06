import React, { useEffect, useState } from "react";
import classes from "./CalendarTask.module.css";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem.jsx";
import { tasksActions } from "../../../store/TaskSlice/TasksSlice";

let init = true;
const CalendarTask = () => {
  const myTasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const TaskItems = myTasks.map((task, index) => {
    return <TaskItem key={index} infoTask={task} />;
  });

  // Sending Cart Date
  useEffect(() => {
    const sendDate = () => {
      fetch("https://taskcalndender-default-rtdb.firebaseio.com/tasks.json", {
        method: "PUT",
        body: JSON.stringify(myTasks),
        headers: {
          "Content-Type": "application/json",
        },
      });
    };
    if (init) {
      init = false;
      return;
    }
    sendDate();
  }, [myTasks]);
  // Getting Tasks Date
  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch(
        "https://taskcalndender-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();
      dispatch(tasksActions.replaceTask(data));
    };
    getTasks();
  }, []);

  useEffect(() => {}, []);

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
