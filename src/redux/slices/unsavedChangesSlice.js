// redux/slices/unsavedChangesSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const unsavedChangesSlice = createSlice({
  name: "unsavedChanges",
  initialState: false, // starts with no unsaved changes
  reducers: {
    setUnsavedChanges: () => true, // Set to true when there's an unsaved change
    clearUnsavedChanges: () => false, // Set to false after saving changes
  },
});

export const { setUnsavedChanges, clearUnsavedChanges } = unsavedChangesSlice.actions;
export default unsavedChangesSlice.reducer;
