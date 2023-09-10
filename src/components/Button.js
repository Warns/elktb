import React from "react";

const Button = ({ label, onClick, className, ...props }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default Button;
