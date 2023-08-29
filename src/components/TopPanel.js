import React from "react";
import Button from "./Button"; 

const TopPanel = ({ onSave }) => {
  return (
    <div className="top-panel">
      <Button label="Kaydet" onClick={onSave}></Button>
    </div>
  );
};

export default TopPanel;
