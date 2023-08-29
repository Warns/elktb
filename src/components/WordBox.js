import React from "react";

const WordBox = (props) => {

  return (
    <div className="word-box">
      <input
        className="word-input input-styles"
        type="text"
        onChange={(e) => props.onInputChange(props.id, e.target.value)}
      />
    </div>
  );
};

export default WordBox;