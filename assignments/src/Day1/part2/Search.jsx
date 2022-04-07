import React from "react";

const commonStyle = {
  backgroundColor: "#80B23D",
  width: "120px",
  outline: "none",
  border: "none",
  padding: "10px",
  borderRadius: "20px",
  color: "#fff",
  textTransform: "uppercase",
  margin: "10px",
};

const Search = () => {
  return <button style={commonStyle}>Search</button>;
};

export default Search;
