import React, { useContext } from "react";
import Button from "./Button";
import { ContentContext } from "./ContentContext";
import SVGIcon from "./SVGIcon";
import settingsIcon from "../assets/icons/settings.svg";

const TopPanel = () => {
  const { state, dispatch } = useContext(ContentContext); // Access state and dispatch from the context

  const handleSave = () => {
    const userInputData = state.userInputData;

    const updatedData = userInputData.map((wordData) => ({
      ...wordData,
      userInput: wordData.userInput || wordData.text, // Use userInput or text
    }));

    // Dispatch an action to update the data in context
    dispatch({ type: "UPDATE_USER_INPUT", payload: updatedData });

    console.log("Changes saved:", updatedData);
  };

  return (
    <div className="top-panel extend-width-button">
      <Button label="Kaydet" onClick={handleSave}></Button>
      <Button label="Kontrole Gonder" onClick={() => console.log("Kontrole Gonder button clicked")} />
      <SVGIcon icon={settingsIcon} onClick={() => console.log("Settings button clicked")} />
    </div>
  );
};

export default TopPanel;
