import React, { createContext } from "react";
import { UseUserInputData } from "./UseUserInputData";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const { userInputData, saveChanges, handleWordInputChange } =
  UseUserInputData();

  return (
    <ContentContext.Provider
      value={{ userInputData, saveChanges, handleWordInputChange }}
    >
      {children}
    </ContentContext.Provider>
  );
};
