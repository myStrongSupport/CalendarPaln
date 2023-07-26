import React, { useEffect, useMemo, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import CalendarForm from "../../components/Calendar/CalendarParts/CalendarForm";

const CalendarEditPage = () => {
  // Get the task
  const location = useLocation();
  let task;
  if (location.state) {
    task = location.state.task;
  }
  const params = useParams();
  const { id, date } = params;

  const memoizedComponent = useMemo(
    () => (
      <>
        <CalendarForm task={task} />
      </>
    ),

    [date, id]
  );
  return memoizedComponent;
};

export default CalendarEditPage;
