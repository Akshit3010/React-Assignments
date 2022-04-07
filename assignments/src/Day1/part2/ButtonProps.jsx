import React from "react";

const commonStyle = {
  width: "120px",
  outline: "none",
  border: "none",
  padding: "10px",
  borderRadius: "20px",
  color: "#fff",
  textTransform: "uppercase",
  margin: "10px",
};

const ButtonProps = ({ name, bgcolor }) => {
  return (
    <button style={{ ...commonStyle, backgroundColor: bgcolor }}>{name}</button>
  );
};

export default ButtonProps;
