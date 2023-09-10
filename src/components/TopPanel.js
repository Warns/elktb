import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput } from "../redux/slices/userInputSlice";
import SVGIcon from "./SVGIcon";
import settingsIcon from "../assets/icons/settings.svg";
import { setUnsavedChanges } from "../redux/slices/unsavedChangesSlice";

const TopPanel = () => {
  const dispatch = useDispatch();
  const userInputData = useSelector((state) => state.userInput);

  const unsavedChanges = useSelector((state) => state.unsavedChanges);
  console.log("Unsaved changes:", unsavedChanges);

  const handleSave = () => {
    const updatedData = userInputData.map((wordData) => ({
      ...wordData,
      userInput: wordData.userInput || "",
    }));
    dispatch(setUserInput(updatedData));
    console.log("Changes saved:", updatedData);

    dispatch(setUnsavedChanges(false)); // reset the unsavedChanges state
  };

  return (
    <div className="top-panel extend-width-button">
      <Button
        label="Kaydet"
        onClick={handleSave}
        className={`custom-button ${unsavedChanges ? "unsaved-changes" : ""}`}
      ></Button>
      <Button
        label="Kontrole Gonder"
        className="custom-button"
      />
      <SVGIcon
        icon={settingsIcon}
        onClick={() => console.log("Settings button clicked")}
      />
    </div>
  );
};

export default TopPanel;
