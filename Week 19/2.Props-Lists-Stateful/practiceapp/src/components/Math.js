import React from "react";

function Math(props) {
  console.log(props);
  const{num1, num2, operator, children} = props;
  let value;
  switch (operator) {
    case "+":
      value = num1 + num2;
      break;
    case "-":
      value = num1 - num2;
      break;
    case "*":
      value = num1 * num2;
      break;
    case "/":
      value = num1 / num2;
      break;
    default:
      value = NaN;
  }
  return (
    <span >
      <span style={{ fontSize: value }}>{value}</span>
      <span style={{ color: "red" }}>... {children}</span>
    </span>
  );
}

export default Math;
