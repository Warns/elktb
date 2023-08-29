import React from "react";
import yourImage from "../assets/images/1.jpg";

const Image = () => {
  const imageContainerStyles = {
    position: "relative",
    backgroundColor: "#ECEAE8",
    borderRadius: "4px 0px 0px 4px",
  };

  const imageStyles = {
    marginTop: "30px",
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div className="side" style={imageContainerStyles}>
      <img src={yourImage} alt="Your Image" style={imageStyles} />
    </div>
  );
};

export default Image;
