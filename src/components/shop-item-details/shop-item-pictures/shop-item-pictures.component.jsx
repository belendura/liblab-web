import React from "react";

import {
  ShopItemPicturesContainer,
  PictureContainer,
} from "./shop-item-pictures.styles";
const ShopItemPictures = ({ url }) => {
  console.log("url", url);
  const [firstItem, secondItem, thirdItem] = url;
  console.log("firstItem", firstItem);
  return (
    <ShopItemPicturesContainer>
      {url
        ? url.map((item, index) => <PictureContainer key={index} url={item} />)
        : null}
    </ShopItemPicturesContainer>
  );
};

export default ShopItemPictures;
