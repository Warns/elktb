import React, { useState, useEffect } from "react";
import { UseUserInputData } from "./UseUserInputData"; // Import the context hook
import SVGIcon from "./SVGIcon";
import separatorIcon from "../assets/icons/separator.svg";
import threeDotsIcon from "../assets/icons/three_dots.svg";

const WordBox = ({ id, initialText, newEntry }) => {
  const { handleWordInputChange, userInputData } = UseUserInputData(); // Use the context hook
  const wordData = userInputData.find((data) => data.id === id);

  // Initialize the text state with the "newEntry" prop if it exists, or the "userInput" from context, or an empty string
  const [text, setText] = useState(newEntry || (wordData ? wordData.userInput : ""));

  useEffect(() => {
    // Update the text state when "newEntry" changes (e.g., when the user saves changes)
    setText(newEntry || (wordData ? wordData.userInput : ""));
  }, [newEntry, wordData]);

  const handleInputChange = (newText) => {
    setText(newText);
    handleWordInputChange(id, newText);
  };

  const handleSeparatorClick = () => {
    // Perform the action when the separator is clicked
    // You can add your logic here
  };

  const handleThreeDotsClick = () => {
    // Perform the action when the three dots are clicked
    // You can add your logic here
  };

  // Check if text is defined before accessing its length property
  const calculatedWidth = text ? 68 + (text.length - 6) * 8 : 68;

  return (
    <div className="word-box-container">
      <div className="separator" onClick={handleSeparatorClick}>
        <SVGIcon icon={separatorIcon} />
      </div>
      <div className="three-dots" onClick={handleThreeDotsClick}>
        <SVGIcon icon={threeDotsIcon} />
      </div>
      <div className={`word-box ${text ? "has-text" : ""}`} style={{ width: `${calculatedWidth}px` }}>
        <input
          className={`word-input input-styles ${text ? "has-text" : ""}`}
          type="text"
          value={text}
          onChange={(e) => handleInputChange(e.target.value)}
          tabIndex="1"
        />
      </div>
    </div>
  );
};

export default WordBox;
