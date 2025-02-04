import { configureStore } from "@reduxjs/toolkit";
import entryReducer from "./entrySlice";
import taskReducer from "./taskSlice";
import themeReducer from "./themeSlice";

export default configureStore({
  reducer: {
    entry: entryReducer,
    task: taskReducer,
    theme: themeReducer,
  },
});
