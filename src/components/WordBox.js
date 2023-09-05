import React, { useContext, useState } from "react";
import { ContentContext } from "./ContentContext";
import SVGIcon from "./SVGIcon";
import separatorIcon from "../assets/icons/separator.svg";
import threeDotsIcon from "../assets/icons/three_dots.svg";

const WordBox = ({ id, initialText }) => {
  const { state, dispatch } = useContext(ContentContext);
  const wordData = state.userInputData.find((data) => data.id === id);
  console.log("WordBox Data for ID:", id, wordData);

  const [text, setText] = useState(initialText || "");

  const handleInputChange = (newText) => {
    setText(newText);

    // Dispatch an action to update the input text for this word
    dispatch({ type: "UPDATE_WORD_INPUT", payload: { id, userInput: newText } });
    
  };

  const handleSeparatorClick = () => {
    // Perform the action when separator is clicked
    // You can add your logic here
  };

  const handleThreeDotsClick = () => {
    // Perform the action when three dots are clicked
    // You can add your logic here
  };

  // Determine whether to apply the "has-text" class based on the text state
  const hasTextClass = text ? "has-text" : "";

  // Calculate the width
  let calculatedWidth = 68 + (text.length - 6) * 8;
  calculatedWidth = Math.min(124, calculatedWidth);
  calculatedWidth = Math.max(68, calculatedWidth);

  return (
    <div className="word-box-container">
      <div className="separator" onClick={handleSeparatorClick}>
        <SVGIcon icon={separatorIcon} />
      </div>
      <div className="three-dots" onClick={handleThreeDotsClick}>
        <SVGIcon icon={threeDotsIcon} />
      </div>
      <div className={`word-box ${hasTextClass}`} style={{ width: `${calculatedWidth}px` }}>
      <input
  className={`word-input input-styles ${hasTextClass}`}
  type="text"
  value={text}
  onChange={(e) => handleInputChange(e.target.value)}
  tabIndex="1"
/>>
      </div>
    </div>
  );
};

export default WordBox;