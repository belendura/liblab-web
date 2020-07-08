import React from "react";

import { CircleContainer, CircleStyled } from "./circle.styles";

const Circle = ({ code, name, color, size, handleDifferentColor }) => {
  return (
    <CircleContainer color={color} name={name}>
      <CircleStyled
        code={code}
        size={size}
        id={name}
        onClick={handleDifferentColor}
      />
    </CircleContainer>
  );
};

export default Circle;
