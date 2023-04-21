import { configureStore } from "@reduxjs/toolkit";
import CalendarSlice from "./CalendarSlice/CalendarSlice";

const store = configureStore({
  reducer: { cal: CalendarSlice.reducer },
});

export default store;
