import React from "react";

const Card = ({ title, brand1, brand2, brand3, brand4 }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        <li>{brand1}</li>
        <li>{brand2}</li>
        <li>{brand3}</li>
        <li>{brand4}</li>
      </ul>
    </>
  );
};

export default Card;
