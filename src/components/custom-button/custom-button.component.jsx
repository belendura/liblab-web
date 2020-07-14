import React from "react";

import { CustomButtonStyled } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonStyled {...props}>{children}</CustomButtonStyled>;
};

export default CustomButton;
