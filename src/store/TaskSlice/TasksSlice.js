import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const TasksSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const { date, task } = action.payload;
      const existingDate = state.tasks.find((item) => item.date === date);

      if (existingDate) {
        const updatedDate = {
          ...existingDate,
          tasks: [...existingDate.tasks, task],
        };

        state.tasks = state.tasks.map((item) =>
          item.date === date ? updatedDate : item
        );
      } else {
        state.tasks.push({ date: date, tasks: [{ ...task, isDone: false }] });
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
    deleteTask(state, action) {
      const { date, taskId } = action.payload;
      const existingDate = state.tasks.find((item) => item.date === date);
      if (existingDate) {
        const updatedTasks = existingDate.tasks.filter(
          (item) => item.id !== taskId
        );

        if (updatedTasks.length === 0) {
          state.tasks = state.tasks.filter((item) => item.date !== date);
        } else {
          state.tasks = state.tasks.map((item) =>
            item.date === date ? { ...item, tasks: updatedTasks } : item
          );
        }
      }
    },
    doneTask(state, action) {
      const { task, date } = action.payload;
      const taskId = task.id;
      const existedDate = state.tasks.find((item) => item.date === date);
      const existedDateIndex = state.tasks.findIndex(
        (item) => item.date === date
      );
      let updateCheckTask;
      if (existedDate) {
        const existedTaskIndex = existedDate.tasks.findIndex(
          (task) => task.id === taskId
        );
        updateCheckTask = [...existedDate.tasks];
        updateCheckTask[existedTaskIndex] = { ...task };
      }
      state.tasks[existedDateIndex] = { date, tasks: updateCheckTask };
    },
  },
});

export const tasksActions = TasksSlice.actions;
export default TasksSlice;
