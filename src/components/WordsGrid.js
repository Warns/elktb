import React, { useContext } from "react";
import WordBox from "./WordBox";
import { ContentContext } from "./ContentContext";

const WordsGrid = () => {
  const { state } = useContext(ContentContext);
  console.log("Context State in WordsGrid:", state);

  if (!state || !state.userInputData) {
    return null; // or some loading indicator
  }

  const lines = [];
  const uniqueLineValues = {};

  state.userInputData.forEach((wordData) => {
    const lineIndex = wordData.line - 1;

    if (!lines[lineIndex]) {
      lines[lineIndex] = [];
    }

    if (!uniqueLineValues[wordData.line]) {
      uniqueLineValues[wordData.line] = wordData.line;
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
