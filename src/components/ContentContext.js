import React, { createContext, useReducer, useEffect } from "react";
import ContentReducer from "./ContentReducer";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  // Initialize state with an empty array
  const [state, dispatch] = useReducer(ContentReducer, {
    userInputData: [],
  });

  useEffect(() => {
    // Define the external JSON API URL
    const apiUrl = "https://api.npoint.io/8e95d54d7cb1f104a413";

    fetch(apiUrl, {
      headers: {
        // Add any required headers here (e.g., API keys)
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data); // Log the API response
        dispatch({ type: "LOAD_DATA", payload: data.record });
        console.log("Loaded data:", data.record); // Log the loaded data
      })
      .catch((error) => {
        console.error("Error loading data from JSON API:", error);
      });
  }, []);

  // Function to save changes
  const saveChanges = (newData) => {
    dispatch({ type: "UPDATE_USER_INPUT", payload: newData });
  };
  
  console.log("Current state:", state);


  // Function to handle word input changes
  const handleWordInputChange = (id, newText) => {
    const updatedData = state.userInputData.map((wordData) =>
      wordData.id === id ? { ...wordData, userInput: newText } : wordData
    );
    dispatch({ type: "UPDATE_WORD_INPUT", payload: updatedData });
  };

  return (
    <ContentContext.Provider
      value={{
        state,
        saveChanges,
        handleWordInputChange,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export { ContentContext };
