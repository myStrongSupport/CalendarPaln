import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showTask: false,
};

const UiSlice = createSlice({
  name: "UiSlice",
  initialState,
  reducers: {
    showTasks(state, action) {
      state.showTask = true;
    },
    hiddenTask(state, action) {
      state.showTask = false;
    },
    ShowHandler(state, action) {
      state.showTask = !state.showTask;
    },
  },
});

export const UiActions = UiSlice.actions;
export default UiSlice;
