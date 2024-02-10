import React, { useEffect, useState } from "react";
import classes from "./CheckBox.module.css";
import { motion as m, useMotionValue, useTransform } from "framer-motion";
import { useDispatch } from "react-redux";
import { tasksActions } from "../store/TaskSlice/TasksSlice";
const tick = {
  pressed: (isChecked) => ({ pathLength: isChecked ? 0.85 : 0.2 }),
  checked: {
    pathLength: 1,
    transition: {
      delay: 0.5,
    },
  },
  unChecked: {
    pathLength: 0,
  },
};

const box = {
  hover: {
    scale: 0.5,
  },
  pressed: {},
  checked: {
    pathLength: 1,
    transition: {
      duration: 0.3,
    },
  },
  unChecked: {
    pathLength: 0,
  },
};
function CheckBox({ date, task }) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.1, 0.3], [0, 1]);

  const checkBoxHandler = () => {
    setIsChecked(!isChecked);
    dispatch(
      tasksActions.doneTask({
        date: date,
        task: { ...task, isDone: !isChecked },
      })
    );
  };
  useEffect(() => {
    setIsChecked(task.isDone);
  }, [task.isDone]);
  return (
    <m.svg
      initial={false}
      animate={isChecked ? "checked" : "unChecked"}
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 30.17 30.17"
      className={classes.checkBox}
      whileTap="pressed"
      onClick={checkBoxHandler}
    >
      <rect
        width="27.17"
        height="27.17"
        x="1.5"
        y="1.5"
        fill="none"
        strokeMiterlimit="10"
        stroke="#3f3f3f56"
        strokeWidth="3"
        rx="2.91"
        className={classes.square}
      ></rect>
      <m.rect
        width="27.17"
        height="27.17"
        x="1.5"
        y="1.5"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="3"
        rx="2.91"
        stroke="#fff"
        variants={box}
      ></m.rect>
      <m.path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M6.21 15.9l6.11 5.36c3-3.21 10.29-13 15.2-19.17"
        variants={tick}
        style={{ pathLength, opacity }}
        custom={isChecked}
      ></m.path>
    </m.svg>
  );
}

export default CheckBox;
