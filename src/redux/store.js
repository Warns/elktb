// store.js

import { configureStore } from '@reduxjs/toolkit';
import userInputReducer from './slices/userInputSlice';

const store = configureStore({
  reducer: {
    userInput: userInputReducer,
  },
});

export default store;
