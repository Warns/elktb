import React from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserInput } from "../redux/slices/userInputSlice";
import SVGIcon from "./SVGIcon";
import settingsIcon from "../assets/icons/settings.svg";

const TopPanel = () => {
  const dispatch = useDispatch();
  const userInputData = useSelector((state) => state.userInput);

  const handleSave = () => {
    const updatedData = userInputData.map((wordData) => ({
      ...wordData,
      userInput: wordData.userInput || "",
    }));
    dispatch(setUserInput(updatedData));
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
