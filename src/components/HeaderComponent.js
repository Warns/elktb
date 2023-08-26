import React from "react";

const HeaderComponent = () => {
  const headerStyles = {
    width: "100%",
    height: "60px",
    backgroundColor: "blue",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  return (
    <header>
      <div style={headerStyles}></div>
    </header>
  );
};

export default HeaderComponent;
