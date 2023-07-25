import { configureStore } from "@reduxjs/toolkit";
import CalendarSlice from "./CalendarSlice/CalendarSlice";
import TasksSlice from "./TaskSlice/TasksSlice";
import UiSlice from "./UiSlice/UiSlice";

const store = configureStore({
  reducer: {
    cal: CalendarSlice.reducer,
    tasks: TasksSlice.reducer,
    ui: UiSlice.reducer,
  },
});

export default store;
