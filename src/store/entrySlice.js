import { createSlice } from "@reduxjs/toolkit";

export const entrySlice = createSlice({
  name: "entry",
  initialState: {
    entries: [],
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
      // console.log("action.payload: ", action.payload);
      state.entries.push(action.payload);
      // console.log("state: ", state.entries);
    },
    decrement: (state, action) => {
      console.log("Removing entry with ID:", action.payload);
      console.log("Current entries before removal:", state.entries);

      state.value -= 1;
      state.entries = state.entries.filter((entry) => {
        // console.log("inside filter 'entry' :", entry.ID);
        return entry.ID !== action.payload; // Ensure you return the condition
      });

      console.log("Entries after removal:", state.entries);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = entrySlice.actions;

export default entrySlice.reducer;
