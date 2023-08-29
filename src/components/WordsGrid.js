import React, { useState } from "react";
import WordBox from "./WordBox";
import jsonData from "../data/data.json";
import TopPanel from "./TopPanel"; // Import the TopPanel component

const WordsGrid = () => {
  const [userInputData, setUserInputData] = useState([...jsonData]); // Initialize with the original data

  const handleWordInputChange = (id, newText) => {
    setUserInputData((prevData) =>
      prevData.map((wordData) =>
        wordData.id === id ? { ...wordData, userInput: newText } : wordData
      )
    );
  };

  const saveChanges = () => {
    // Now userInputData contains the user's entered data
    console.log("User input data:", userInputData);
    // You can proceed to update your JSON data or perform other actions
  };

  const lines = [];
  userInputData.forEach((wordData) => {
    const lineIndex = wordData.line - 1;
    if (!lines[lineIndex]) {
      lines[lineIndex] = [];
    }
    lines[lineIndex].push(
      <div key={`container-${wordData.id}`} className="line-container">
        <div className="script-text">{wordData.script}</div>
        <WordBox
          id={wordData.id}
          text={wordData.userInput || wordData.text} // Use userText if available
          onInputChange={handleWordInputChange}
        />
      </div>
    );
  });

  return (
    <div className="side words-container">
      <TopPanel onSave={saveChanges} />
      <div className="words-content">
        {lines.map((line, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "row-reverse" }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordsGrid;

