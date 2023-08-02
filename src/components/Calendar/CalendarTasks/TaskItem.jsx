import React from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import classes from "./TaskItem.module.css";
import { AnimatePresence, MotionConfig, motion as m } from "framer-motion";
import CheckBox from "../../../UI/CheckBox";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../../store/TaskSlice/TasksSlice";
const TaskItem = ({ infoTask }) => {
  console.log("Ramtin");
  const dispath = useDispatch();
  const showTask = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerchildren: 1,
      },
    },
    exit: {},
  };
  const itemHead = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: {
        delay: 0.5,
      },
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
    exit: {
      x: 50,
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
  };
  const list = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.9,
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
    exit: {
      y: -10,
      opacity: 0,
    },
  };

  const line = {
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
  // Handlers
  const deleteTaskHandler = (data) => {
    dispath(tasksActions.deleteTask(data));
  };
  const day = infoTask.date.split("_")[2];
  const month = infoTask.date.split("_")[1];
  const numberOfTasks = infoTask.tasks.length;
  const tasksOfDay = infoTask.tasks.map((task) => {
    return (
      <m.div
        variants={item}
        layout
        key={task.id}
        className={classes["task-list-item-container"]}
      >
        <li
          style={{
            background: `linear-gradient(${task.color})`,
            backgroundSize: "150% 71%",
          }}
          className={`${classes["task-list-item"]} ${
            task.isDone ? classes.isDone : classes.isNotDone
          }`}
        >
          <div className={classes["task-info"]}>
            <span>
              {task.hour}:{task.min}
            </span>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        </li>
        <div
          className={`${classes["task-actions"]} ${
            task.isDone ? classes.isHoverDone : ""
          }`}
        >
          <div className={classes["task-actions-link"]}>
            <Link
              to={{
                pathname: `/calendar/${infoTask.date}/edit/${task.id}`,
              }}
              state={{ task: task }}
            >
              <BiEdit />
            </Link>
            <AiFillDelete
              onClick={deleteTaskHandler.bind(null, {
                date: infoTask.date,
                taskId: task.id,
              })}
            />
          </div>
          <CheckBox date={infoTask.date} task={task} />
        </div>
      </m.div>
    );
  });

  return (
    <>
      <div className={classes["show-task-item"]}>
        <m.span
          variants={line}
          initial="hidden"
          animate="show"
          className={classes["task-dot"]}
        ></m.span>
        <div className={classes["show-task-date"]}>
          <m.h3 variants={itemHead} initial="hidden" animate="show" exit="exit">
            {day}
          </m.h3>
          <m.div
            variants={itemMonth}
            initial="hidden"
            animate="show"
            exit="exit"
            className={classes["task-task-date_day"]}
          >
            <h4>{shamsiMonths[month - 1]}</h4>
            <p>شما {numberOfTasks} فعالیت دارید </p>
          </m.div>
        </div>
        <m.ul
          variants={list}
          initial="hidden"
          animate="show"
          exit="exit"
          className={classes["tasks-list"]}
        >
          <AnimatePresence>{tasksOfDay}</AnimatePresence>
        </m.ul>
      </div>
    </>
  );
};

export default React.memo(TaskItem);
