const ContentReducer = (state, action) => {
    console.log("Action Dispatched:", action); // Log the dispatched action
    switch (action.type) {
      case "UPDATE_USER_INPUT":
        // Handle the "UPDATE_USER_INPUT" action as before
        // ...
        break; // Add a break statement here
  
      case "UPDATE_WORD_INPUT":
        // Handle the "UPDATE_WORD_INPUT" action as before
        // ...
        break; // Add a break statement here
  
      case "LOAD_DATA":
        // Replace the existing state with the loaded data
        return { ...action.payload };
  
      default:
        return state;
    }
  };
  
  export default ContentReducer;
  