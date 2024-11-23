import React from "react";
import "./ButtonBox.scss";

const ButtonBox = ({
  backgroundColor = "transparent",
  borderColor = "transparent",
}) => {
  return (
    <div
      style={{ backgroundColor, borderColor }}
      className="Pin-Button__Children"
    ></div>
  );
};

export default ButtonBox;
