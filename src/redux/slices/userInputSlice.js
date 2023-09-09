import { createSlice } from "@reduxjs/toolkit";

export const userInputSlice = createSlice({
  name: "userInput",
  initialState: [], // Make sure to initialize as an array
  reducers: {
    setUserInput: (state, action) => {

      // Check if payload is an array (i.e., data fetched from API)
      if (Array.isArray(action.payload)) {
        return action.payload;
      } else {
        // If payload is an object, find the item with the matching ID and update it
        const index = state.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state[index].userInput = action.payload.userInput;
        } else {
          // If item with matching ID isn't found, add it to the state (though this shouldn't typically happen in your case)
          state.push(action.payload);
        }
        return state; // Always return state in the end
      }
    },
  },
});

export const { setUserInput } = userInputSlice.actions;
export default userInputSlice.reducer;
