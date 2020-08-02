import React from "react";

import {
  ShopItemPicturesContainer,
  PictureContainer,
} from "./shop-item-pictures.styles";
const ShopItemPictures = ({ url }) => {
  return (
    <ShopItemPicturesContainer>
      {url
        ? url.map((item, index) => <PictureContainer key={index} url={item} />)
        : null}
    </ShopItemPicturesContainer>
  );
};

export default ShopItemPictures;
