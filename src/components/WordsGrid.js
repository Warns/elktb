// WordsGrid.js
import React from "react";
import WordBox from "./WordBox";
import { useContentContext } from "./ContentContext";

const WordsGrid = () => {
  const { userInputData } = useContentContext();

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
          initialText={wordData.userInput || wordData.text} // Use userInput or text
        />
      </div>
    );
  });

  return (
    <div className="side words-container">
      <div className="words-content">
        {lines.map((line, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "row-reverse" }}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordsGrid;
