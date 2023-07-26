import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  taskEdit: {},
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
        const newA = a.date.replace(/_[^_]+$/, "");
        const newB = b.date.replace(/_[^_]+$/, "");
        const dateA = new Date(newA.replace(/_/g, "-")).getTime();
        const dateB = new Date(newB.replace(/_/g, "-")).getTime();
        return dateA - dateB;
      });
    },
    replaceTask(state, action) {
      state.tasks = action.payload === null ? [] : action.payload;
    },
    updateTask(state, action) {
      const { task, date } = action.payload;
      const taskId = task.id;
      const existedDate = state.tasks.find((item) => item.date === date);
      const existedDateIndex = state.tasks.findIndex(
        (item) => item.date === date
      );

      let updatedTasks;
      // let updatedTaskDate;
      if (existedDate) {
        const existedTaskIndex = existedDate.tasks.findIndex(
          (task) => task.id === taskId
        );
        updatedTasks = [...existedDate.tasks];

        updatedTasks[existedTaskIndex] = { ...task };
      }

      state.tasks[existedDateIndex] = { date, tasks: updatedTasks };
    },
  },
});

export const tasksActions = TasksSlice.actions;
export default TasksSlice;
