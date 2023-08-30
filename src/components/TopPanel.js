// TopPanel.js
import React from "react";
import Button from "./Button";
import { useContentContext } from "./ContentContext"; // Import the useContentContext hook

const TopPanel = () => {
  const { userInputData, handleWordInputChange } = useContentContext();

  const handleSave = () => {
    const updatedData = userInputData.map((wordData) => ({
      ...wordData,
      userInput: wordData.userInput || wordData.text, // Use userInput or text
    }));
    handleWordInputChange(updatedData); // Update the data in context
    console.log("Changes saved:", updatedData);
  };;

  return (
    <div className="top-panel">
      <Button label="Kaydet" onClick={handleSave}></Button>
    </div>
  );
};

export default TopPanel;
