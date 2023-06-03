import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const TasksSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      let { date, task } = action.payload;
      const existingDate = state.tasks.find((item) => item.date === date);

      if (existingDate) {
        existingDate.tasks.push(task);
      } else {
        state.tasks.push({ date: date, tasks: [task] });
      }

      state.tasks.sort((a, b) => {
        const dateA = new Date(a.date.replace(/_/g, "-")).getTime();
        const dateB = new Date(b.date.replace(/_/g, "-")).getTime();
        return dateA - dateB;
      });
    },
  },
});

export const tasksActions = TasksSlice.actions;
export default TasksSlice;
