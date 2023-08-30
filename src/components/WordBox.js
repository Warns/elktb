import React from "react";
import { useState } from "react"; // Import useState
import { useContentContext } from "./ContentContext"; // Import the context hook

const WordBox = ({ id, initialText }) => {
  const { handleWordInputChange, userInputData } = useContentContext();
  const wordData = userInputData.find((data) => data.id === id);
  const [text, setText] = useState(wordData.userInput || ""); // Initialize with userInput if available

  const handleInputChange = (newText) => {
    setText(newText);
    handleWordInputChange(id, newText); // Update the context with new text
  };

  return (
    <div className="word-box">
      <input
        className="word-input input-styles"
        type="text"
        value={text}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default WordBox;
