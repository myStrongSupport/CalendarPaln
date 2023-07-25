import React from "react";
import classes from "./CalendarEffect.module.css";
import CalendarTask from "./CalendarTasks/CalendarTask";
import CalendarYear from "./CalendarTasks/CalendarYear";
import { motion, useMotionValue } from "framer-motion";
import Charven from "../../UI/Charven";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UiActions } from "../../store/UiSlice/UiSlice";
const CalendarEffect = (props) => {
  const dispatch = useDispatch();
  const showTask = useSelector((state) => state.ui.showTask);
  const dragX = useMotionValue(0);
  const threshold = -50;
  const handleDragEnd = () => {
    if (dragX.get() <= threshold) {
      dispatch(UiActions.ShowHandler());
    }
  };
  return (
    <>
      {showTask && <CalendarTask />}
      {!showTask && <CalendarYear />}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragSnapToOrigin="true"
        onDragEnd={handleDragEnd}
        className={classes.drag}
        style={{
          x: dragX,
        }}
      >
        <Charven />
      </motion.div>
    </>
  );
};

export default React.memo(CalendarEffect);
