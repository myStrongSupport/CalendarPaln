import React from "react";
import { BiEdit } from "react-icons/bi";
import classes from "./TaskItem.module.css";
const TaskItem = ({ infoTask }) => {
  const shamsiMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const day = infoTask.date.split("_")[2];
  const month = infoTask.date.split("_")[1];
  const numberOfTasks = infoTask.tasks.length;
  const tasksOfDay = infoTask.tasks.map((task, index) => (
    <li key={index} className={classes["task-list-item"]}>
      <div className={classes["task-info"]}>
        <span>
          {task.hour}:{task.min}
        </span>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </div>
      <div className={classes["task-actions"]}>
        <BiEdit />
      </div>
    </li>
  ));

  return (
    <>
      <div className={classes["show-task-date"]}>
        <h3>{day}</h3>
        <div className={classes["task-task-date_day"]}>
          <h4>{shamsiMonths[month]}</h4>
          <p>شما {numberOfTasks} فعالیت دارید </p>
        </div>
      </div>
      <ul className={classes["tasks-list"]}>{tasksOfDay}</ul>
    </>
  );
};

export default TaskItem;
