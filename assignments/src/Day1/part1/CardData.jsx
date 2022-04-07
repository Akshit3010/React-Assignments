import React from "react";
import Card from "./Card";

const data1 = {
  title: "Mobile Operating System",
  brand1: "Android",
  brand2: "Blackberry",
  brand3: "iPhone",
  brand4: "Windows Phone",
};

const data2 = {
  title: "Mobile Manufacturers",
  brand1: "Samsung",
  brand2: "Micromax",
  brand3: "Apple",
  brand4: "Xiaomi",
};

const CardData = () => {
  return (
    <>
      <Card {...data1} />
      <br />
      <Card {...data2} />
    </>
  );
};

export default CardData;
