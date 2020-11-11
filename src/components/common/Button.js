import React from "react";
const secondary = "#0C0D34";
const primary = "#2CB9B0";

export default ({
  text,
  click,
  color = "white",
  backgroundColor = primary,
  style = {},
  disabled = false,
}) => {
  return (
    <div
      className="common-button"
      disabled={disabled}
      style={{
        width: 200,
        height: 40,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        display: "flex",
      }}
      onClick={click}
    >
      <span style={{ color }}>{text}</span>
    </div>
  );
};
