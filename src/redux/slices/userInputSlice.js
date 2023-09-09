// userInputSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const userInputSlice = createSlice({
  name: "userInput",
  initialState: [],
  reducers: {
    setUserInput: (state, action) => {
      return action.payload; // Update state with the fetched data
    },
  },
});

export const { setUserInput } = userInputSlice.actions;
export default userInputSlice.reducer;
