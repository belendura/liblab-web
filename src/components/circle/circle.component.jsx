import React from "react";

import { CircleStyled } from "./circle.styles";

const Circle = ({ color, size }) => {
  return <CircleStyled color={color} size={size} />;
};

export default Circle;
