import React from "react";
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
    border: "1px solid red",
  };

  const renderWordBoxes = () => {
    let currentLine = -1;
    let lineContainer = null;
    let lines = [];

    return jsonData.map((wordData) => {
      /*
      if(currentLine !== wordData.line){
        lineContainer = document.createElement("div");
        lines.push(lineContainer);
        currentLine = wordData.line;
      }

      lines[currentLine-1].appendChild(<WordBox text={wordData.text} />);
      */

      if (currentLine !== wordData.line) {
        currentLine = wordData.line;
        lineContainer = (
          <div key={`line_${currentLine}`} style={wordsLineStyles}>
            Line {currentLine}: {/* Display line number */}
            <WordBox text={wordData.text} />
          </div>
        );
      }

      const boxProps = {
        key: wordData.id,
        word: wordData,
      };

      return (
        <>
          {lineContainer}
          <WordBox {...boxProps} />
        </>
      );
    });
  };

  return (
    <div className="side" style={wordsContainerStyles}>
      <div style={wordsContentStyles}>{renderWordBoxes()}</div>
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
