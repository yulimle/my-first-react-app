import React from "react";

export default function ExItem({ item, price }) {
  return (
    <div>
      <h1>품목명: {item}</h1>
      <p>가격: {price}</p>
    </div>
  );
}
