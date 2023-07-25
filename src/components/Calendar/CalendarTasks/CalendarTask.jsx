import React, { useEffect } from "react";
import classes from "./CalendarTask.module.css";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem.jsx";
import { tasksActions } from "../../../store/TaskSlice/TasksSlice";
import { AnimatePresence, MotionConfig } from "framer-motion";

let init = true;
const CalendarTask = () => {
  const myTasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const TaskItems = myTasks.map((task, index) => {
    return <TaskItem key={index} infoTask={task} />;
  });

  const isEmpty = myTasks.length === 0;

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
  }, [dispatch]);

  return (
    <MotionConfig>
      <div className={classes["calendar-tasks-mention"]}>
        <h1>برنامه های من</h1>
        <div className={`${classes["show-tasks"]} ${classes.line}`}>
          <div>
            <AnimatePresence>
              {isEmpty ? (
                <div className={classes.empty}>
                  <p>شما هیچ برنامه را وارد نکردید</p>
                </div>
              ) : (
                TaskItems
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};

export default CalendarTask;
