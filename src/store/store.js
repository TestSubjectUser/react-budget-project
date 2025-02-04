import { configureStore } from "@reduxjs/toolkit";
import entryReducer from "./entrySlice";
import taskReducer from "./taskSlice";

export default configureStore({
  reducer: {
    entry: entryReducer,
    task: taskReducer,
  },
});
