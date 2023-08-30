// TopPanel.js
import React from "react";
import Button from "./Button";
import { useContentContext } from "./ContentContext"; // Import the useContentContext hook
import SVGIcon from "./SVGIcon";
import settingsIcon from "../assets/icons/settings.svg";

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
    <div className="top-panel extend-width-button">
      <Button label="Kaydet" onClick={handleSave}></Button>
      <Button label="Kontrole Gonder" onClick={() => console.log("Kontrole Gonder button clicked")} />
      <SVGIcon icon={settingsIcon} onClick={() => console.log("Settings button clicked")} />
    </div>
  );
};

export default TopPanel;
