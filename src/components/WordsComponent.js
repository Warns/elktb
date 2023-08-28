import React, { useState } from "react";
import WordBox from "./WordBox";
import jsonData from "../data/data.json";

const WordsComponent = () => {
  const wordsContainerStyles = {
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderRadius: "0px 4px 4px 0px",
    borderRight: "30px solid #ECEAE8",
  };

  const wordsContentStyles = {
    marginTop: "30px",
    marginLeft: "30px",
    marginRight: "20px",
    marginBottom: "20px",
    maxHeight: "calc(100% - 50px)",
    overflowY: "auto",
  };

  const wordsLineStyles = {
    display: "flex",     // Apply Flexbox to arrange words side by side
    border: "1px solid red",
    justifyContent: "flex-end", // Align contents to the right

  };

  const [lines, setLines] = useState([]);

  jsonData.forEach((wordData) => {
    const lineIndex = wordData.line - 1;

    if (!lines[lineIndex]) {
      lines[lineIndex] = [];
    }

    lines[lineIndex].push(<WordBox key={wordData.id} text={wordData.script} />);
  });

  return (
    <div className="side" style={wordsContainerStyles}>
      <div style={wordsContentStyles}>
        {lines.map((line, index) => (
          <div key={index} style={wordsLineStyles}>
            {line.reverse()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordsComponent;

// import React from 'react';
// import WordBox from './WordBox';
// import jsonData from '../data/data.json';

// const WordsComponent = () => {
//   // Group words by line
//   const lines = {};
//   jsonData.forEach((word) => {
//     if (!lines[word.line]) {
//       lines[word.line] = [];
//     }
//     lines[word.line].push(word);
//   });

//   return (
//     <div>
//       {Object.keys(lines).map((lineNumber) => (
//         <div key={lineNumber}>
//           {lines[lineNumber].map((word) => (
//             <WordBox key={word.id} word={word} />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default WordsComponent;