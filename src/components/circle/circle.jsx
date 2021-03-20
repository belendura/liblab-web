import React from "react";

import { Container, CircleMenu } from "./circle.styles";

const Circle = ({ code, name, color, size }) => {
  return (
    <Container color={color} name={name}>
      <CircleMenu code={code} size={size} id={name} />
    </Container>
  );
};

export default Circle;
