import React from "react";

import { ButtonStyled } from "./button.styles";

const Button = ({ children, color }) => {
  return <ButtonStyled color={color}>{children}</ButtonStyled>;
};

export default Button;
