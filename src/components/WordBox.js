import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInput } from "../redux/slices/userInputSlice";
import SVGIcon from "./SVGIcon";
import separatorIcon from "../assets/icons/separator.svg";
import threeDotsIcon from "../assets/icons/three_dots.svg"; 

const WordBox = ({ id, initialText }) => {
  
  const dispatch = useDispatch();

  const text = useSelector((state) => {
    const wordData = state.userInput.find((data) => data.id === id);
    return wordData ? wordData.userInput || "" : "";
  });

  const handleInputChange = (newText) => {
    dispatch(setUserInput({ id, userInput: newText }));
  };
  
  const handleSeparatorClick = () => {
    // Perform the action when separator is clicked
    // You can add your logic here
  };

  const handleThreeDotsClick = () => {
    // Perform the action when separator is clicked
    // You can add your logic here
  };

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
