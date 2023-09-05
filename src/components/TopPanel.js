import React from "react";
import Button from "./Button";
import { UseUserInputData } from "./UseUserInputData";
import SVGIcon from "./SVGIcon";
import settingsIcon from "../assets/icons/settings.svg";

const TopPanel = () => {
  const { userInputData, saveChanges } = UseUserInputData(); // Use saveChanges function

  const handleSave = () => {
    console.log("Before update:", userInputData); // Log the current state

    const updatedData = userInputData.map((wordData) => ({
      ...wordData,
      // Use the user's input or keep it empty if no input provided
      userInput: wordData.userInput || "",
    }));
    saveChanges(updatedData); // Update the data using saveChanges
    console.log("After update:", updatedData); // Log the updated state
    console.log("Changes saved:", updatedData);
};

  return (
    <div className="top-panel extend-width-button">
      <Button label="Kaydet" onClick={handleSave}></Button>
      <Button
        label="Kontrole Gonder"
        onClick={() => console.log("Kontrole Gonder button clicked")}
      />
      <SVGIcon
        icon={settingsIcon}
        onClick={() => console.log("Settings button clicked")}
      />
    </div>
  );
};

export default TopPanel;
