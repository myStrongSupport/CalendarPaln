import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import CalendarForm from "../../components/Calendar/CalendarParts/CalendarForm";

const CalendarEditPage = () => {
  // Get the task
  const location = useLocation();
  let task;
  if (location.state) {
    task = location.state.task;
  }

  const memoizedComponent = useMemo(
    () => (
      <>
        <CalendarForm task={task} />
      </>
    ),

    [task]
  );
  return memoizedComponent;
};

export default CalendarEditPage;
