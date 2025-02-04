import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
    lastid: 1,
  },
  reducers: {
    addTask: (state, action) => {
      state.lastid += 1;
      state.tasks.push({ ID: state.lastid, content: action.payload });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => {
        return task.ID !== action.payload;
      });
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
