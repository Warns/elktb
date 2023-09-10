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
        const index = state.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state[index].userInput = action.payload.userInput;
        } else {
          // If item with matching ID isn't found, add it to the state (though this shouldn't typically happen in your case)
          state.push(action.payload);
        }
        return state; // Always return state in the end
      }
    },
    cloneWordData: (state, action) => {
      // Find the word data to clone
      const wordData = state.find((data) => data.id === action.payload);

      if (wordData) {
        const clonedData = {
          ...wordData,
          id: `${wordData.id}_1`,
          line: wordData.line + 1,
          sequence: 1,
        };

        // Insert the cloned word data at the beginning of the line
        const insertionIndex = state.findIndex(
          (data) => data.line === clonedData.line
        );

        if (insertionIndex !== -1) {
          state.splice(insertionIndex, 0, clonedData);
        } else {
          // If the line doesn't exist yet, add the cloned data to the end
          state.push(clonedData);
        }
      }
      return state;
    },
  },
});

export const { setUserInput, cloneWordData } = userInputSlice.actions;
export default userInputSlice.reducer;
