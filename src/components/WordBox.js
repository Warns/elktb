import React from "react";

const WordBox = ({ text }) => {

  const boxStyles = {
    width: "fit-content",  
    height: "fit-content",
    padding: "2px 12px 2px 4px",
    borderRadius: "4px",
    border: "1px solid",
    background: "#C0BCB4",
    margin: "4px",  
  };

  return <div style={boxStyles}>{text}</div>;
};

export default WordBox;
