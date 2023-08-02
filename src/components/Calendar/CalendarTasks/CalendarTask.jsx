import React, { useEffect, useState } from "react";
import classes from "./CalendarTask.module.css";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem.jsx";
import { tasksActions } from "../../../store/TaskSlice/TasksSlice";
import { AnimatePresence, MotionConfig, motion as m } from "framer-motion";

let init = true;
const CalendarTask = () => {
  const [isTop, setIsTop] = useState(true);
  const myTasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const TaskItems = myTasks.map((task) => {
    return <TaskItem key={task.date} infoTask={task} />;
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
  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    setIsTop(scrollTop === 0);
    console.log(scrollTop === 0);
  };
  return (
    <MotionConfig>
      <div className={classes["calendar-tasks-mention"]}>
        <m.h1
          className={isTop ? classes.notOnScroll : classes.onScroll}
          animate={{ opacity: [0, 1], y: [10, 0] }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
        >
          برنامه های من
        </m.h1>
        <div
          onScroll={handleScroll}
          className={`${classes["show-tasks"]} ${classes.line}`}
        >
          <div>
            <AnimatePresence>
              {isEmpty ? (
                <m.div
                  animate={{ opacity: [0, 1], y: [10, 0] }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                  }}
                  className={classes.empty}
                >
                  <p>شما هیچ برنامه را وارد نکردید</p>
                </m.div>
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

export default React.memo(CalendarTask);
