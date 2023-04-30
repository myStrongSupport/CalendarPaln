import { createSlice } from "@reduxjs/toolkit";
const moment = require("moment-jalaali");
const currentDate = moment;

const initialState = {
  year: currentDate().jYear(),
  month: currentDate().jMonth(),
  day: currentDate().jDate(),
  days: [],
};

const getLastMonth = (month) => {
  let lastMonth = month - 1;
  if (lastMonth < 0) {
    lastMonth = 11;
    return lastMonth;
  } else {
    return lastMonth;
  }
};

const CalendarSlice = createSlice({
  name: "Calendar",
  initialState: initialState,
  reducers: {
    rendarCalendarPersian(state, payload) {
      // Getting first day of month 0-6
      const firstDayOfMonth = currentDate()
        .jYear(state.year)
        .jMonth(state.month)
        .startOf("jMonth")
        .weekday();
      // Getting last Date of last month
      const lastDateOfLastMonth = currentDate.jDaysInMonth(
        state.year,
        getLastMonth(state.month)
      );

      // Getting Last Date of month
      const lastDateOfMonth = currentDate.jDaysInMonth(state.year, state.month);
      // Getting last day of month
      // `${state.year}-${state.month + 1}-${lastDateOfMonth}`
      const lastDayOfWeek =
        moment(
          `${state.year}-${state.month + 1}-${lastDateOfMonth}`,
          "jYYYY-jMM-jDD"
        ).day() + 1;
      // Days
      let days = [];
      // Getting last Days of last month
      console.log(firstDayOfMonth);
      if (firstDayOfMonth !== 6) {
        for (
          let i = lastDateOfLastMonth - firstDayOfMonth;
          i <= lastDateOfLastMonth;
          i++
        ) {
          days.push({ day: i, typeDay: "last-month-day" });
        }
      }
      // Getting Current Days
      for (let i = 1; i <= lastDateOfMonth; i++) {
        days.push({ day: i, typeDay: "current-month" });
      }

      for (let i = lastDayOfWeek === 7 ? 0 : lastDayOfWeek; i < 6; i++) {
        let nextMonthDay = i - (lastDayOfWeek === 7 ? 0 : lastDayOfWeek) + 1;
        days.push({ day: nextMonthDay, typeDay: "next-month-day" });
      }

      state.days = days;
    },
    // Change Month and Year Handler
    monthChange(state, action) {
      if (action.payload === "prev") {
        state.month--;
        if (state.month < 0) {
          state.month = 11;
          state.year--;
        }
      } else {
        state.month++;
        if (state.month > 11) {
          state.month = 0;
          state.year++;
        }
      }
    },
  },
});
export const CalendarActions = CalendarSlice.actions;
export default CalendarSlice;
