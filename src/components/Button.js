// TopPanel.js
import React from "react";
import Button from "./Button";

const TopPanel = ({ onSave }) => {
  return (
    <div className="top-panel">
      <Button label="Kaydet" onClick={onSave} />
    </div>
  );
};

export default TopPanel;
