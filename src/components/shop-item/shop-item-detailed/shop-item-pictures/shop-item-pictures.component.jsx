import React from "react";

import { Container, PicContainer, Picture } from "./shop-item-pictures.styles";
const ShopItemPictures = ({ url }) => {
  return (
    <Container>
      <PicContainer>
        {url
          ? url
              .filter((item, index) => index < 7)
              .map((item, index) => (
                <Picture key={index} url={item} onClick={() => {}} />
              ))
          : null}
      </PicContainer>
    </Container>
  );
};

export default ShopItemPictures;
