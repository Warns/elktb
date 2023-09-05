import React from "react";
import WordBox from "./WordBox";
import { useContentContext } from "./ContentContext"; // Import the UseUserInputData hook

const WordsGrid = () => {
  const { userInputData } = useContentContext(); // Use the UseUserInputData hook

  const lines = [];
  const uniqueLineValues = {}; // Store unique line values

  userInputData.forEach((wordData) => {
    const lineIndex = wordData.line - 1;

    if (!lines[lineIndex]) {
      lines[lineIndex] = [];
    }

    if (!uniqueLineValues[wordData.line]) {
      uniqueLineValues[wordData.line] = wordData.line; // Store unique line value
    }

    lines[lineIndex].push(
      <div key={`container-${wordData.id}`} className="line-container">
        <div className="script-text">{wordData.script}</div>
        <WordBox
          id={wordData.id}
          initialText={wordData.userInput || wordData.text}
        />
      </div>
    );
  });

  return (
    <div className="side words-container">
      <div className="words-content">
        {lines.map((line, index) => (
          <div key={index} className="words-line-container">
            <div className="line-number">{uniqueLineValues[index + 1]}</div>
            {line.map((wordBox, wordIndex) => (
              <div key={wordIndex} className="box-container">
                {wordBox}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordsGrid;
