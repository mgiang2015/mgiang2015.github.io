import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";

export const CircledText = ({ color, children, chosen }) => {
  const [show, setShow] = useState(chosen)
  const animationDuration = 400; // ms

  return (
    <RoughNotation
      type="circle"
      padding={[10, 10]}
      iterations={1}
      strokeWidth={2}
      animationDuration={animationDuration}
      color={color}
      show={show}
      onMouseEnter={() => show || setShow(true)}
      onMouseLeave={() => chosen || setShow(false)}
    >
      {children}
    </RoughNotation>
  );
};
