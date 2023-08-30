// ContentContext.js
import React, { createContext, useContext, useState } from "react";
import jsonData from "../data/data.json"; // Update the import path to match your data source

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [userInputData, setUserInputData] = useState([...jsonData]);

  const saveChanges = (newData) => {
    setUserInputData(newData);
  };

  const handleWordInputChange = (id, newText) => {
    const updatedData = userInputData.map((wordData) =>
      wordData.id === id ? { ...wordData, userInput: newText } : wordData
    );
    setUserInputData(updatedData);
  };
;

  return (
    <ContentContext.Provider value={{ userInputData, saveChanges, handleWordInputChange }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => useContext(ContentContext);
