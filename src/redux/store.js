// store.js

import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "./slices/userInputSlice";
import unsavedChangesReducer from "./slices/unsavedChangesSlice";


const store = configureStore({
  reducer: {
    userInput: userInputReducer,
    // Add other reducers here if you have them
  },

  reducer: {
    userInput: userInputReducer,
    unsavedChanges: unsavedChangesReducer,
  },
});

export default store;
