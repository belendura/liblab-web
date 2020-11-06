import React from "react";

import { Container, CircleMenu } from "./circle.styles";

const Circle = ({ code, name, color, size, handleDifferentColor }) => {
  return (
    <Container color={color} name={name}>
      <CircleMenu
        code={code}
        size={size}
        id={name}
        onClick={handleDifferentColor}
      />
    </Container>
  );
};

export default Circle;
