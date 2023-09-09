// store.js

import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "./slices/userInputSlice";

const store = configureStore({
  reducer: {
    userInput: userInputReducer,
    // Add other reducers here if you have them
  },
});

export default store;
