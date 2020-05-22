import React from "react";
import { useHistory } from "react-router-dom";

import { PictureContainer, Title } from "./menu-picture.styles";

const MenuPicture = () => {
  const history = useHistory();
  return (
    <PictureContainer onClick={() => history.push("/shop/women")}>
      <Title>Woman</Title>
    </PictureContainer>
  );
};

export default MenuPicture;
