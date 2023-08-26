import React from "react";

const WordBox = (props) => {
  const boxStyles = {};

  return <div style={boxStyles}>{props.text}</div>;
};

export default WordBox;
