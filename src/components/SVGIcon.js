// SVGIcon.js
import React from "react";

const SVGIcon = ({ icon, onClick }) => {
  return (
    <button className="svg-icon-button" onClick={onClick}>
      <div className="svg-icon-container">
        <img src={icon} alt="SVG Icon" className="svg-icon" />
      </div>
    </button>
  );
};

export default SVGIcon;
