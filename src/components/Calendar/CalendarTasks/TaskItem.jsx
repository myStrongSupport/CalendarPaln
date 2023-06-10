import React from "react";
import { BiEdit } from "react-icons/bi";
import classes from "./TaskItem.module.css";
import { motion } from "framer-motion";
const TaskItem = ({ infoTask }) => {
  const itemHead = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  const itemMonth = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const contaienr = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        when: "beforeChildren",
        staggerchildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };

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
    <motion.li
      variants={item}
      key={index}
      className={classes["task-list-item"]}
    >
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
    </motion.li>
  ));

  return (
    <motion.div className={classes["show-task-item"]}>
      <span className={classes["task-dot"]}></span>
      <div className={classes["show-task-date"]}>
        <motion.h3 variants={itemHead} initial="hidden" animate="show">
          {day}
        </motion.h3>
        <motion.div
          variants={itemMonth}
          initial="hidden"
          animate="show"
          className={classes["task-task-date_day"]}
        >
          <h4>{shamsiMonths[month - 1]}</h4>
          <p>شما {numberOfTasks} فعالیت دارید </p>
          {/* <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              delay: 0.7,
            }}
            className={classes.line}
          ></motion.div> */}
        </motion.div>
      </div>
      <motion.ul
        variants={contaienr}
        initial="hidden"
        animate="show"
        className={classes["tasks-list"]}
      >
        {tasksOfDay}
      </motion.ul>
    </motion.div>
  );
};

export default TaskItem;
