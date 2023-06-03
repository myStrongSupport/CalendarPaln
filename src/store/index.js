import { configureStore } from "@reduxjs/toolkit";
import CalendarSlice from "./CalendarSlice/CalendarSlice";
import TasksSlice from "./TaskSlice/TasksSlice";

const store = configureStore({
  reducer: { cal: CalendarSlice.reducer, tasks: TasksSlice.reducer },
});

export default store;
