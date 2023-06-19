import React from "react";
import { RoughNotation } from "react-rough-notation";

export const BoxedText = ({ color, children }) => {
  const animationDuration = 400; // ms

  return (
    <RoughNotation
      type="box"
      padding={[10,10]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
      show={true}
      strokeWidth={5}
    >
      {children}
    </RoughNotation>
  );
};