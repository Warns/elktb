// ContentContext.js

import React, { createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInput } from "../slices/userInputSlice";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const userInputData = useSelector((state) => state.userInput);
  const dispatch = useDispatch();

  const handleWordInputChange = (id, newText) => {
    dispatch(setUserInput({ id, userInput: newText }));
  };

  return (
    <ContentContext.Provider value={{ userInputData, handleWordInputChange }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = () => React.useContext(ContentContext);
