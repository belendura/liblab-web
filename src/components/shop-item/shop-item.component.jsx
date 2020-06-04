import React from "react";
import { useHistory } from "react-router-dom";

import {
  ShopItemContainer,
  ShopItemPicture,
  ShopItemFooter,
  ShopItemDescription,
  ShopItemPrice,
  ShopItemFav,
  ShopItemNew,
} from "./shop-item.styles";

const ShopItem = ({ url, description, price, newItem }) => {
  const history = useHistory();
  console.log("url in ShopItem", url);
  return (
    <ShopItemContainer onClick={() => history.push(`/shop/${description}`)}>
      <ShopItemPicture url={url} />
      <ShopItemFav />
      <ShopItemFooter>
        <ShopItemDescription>{description}</ShopItemDescription>
        <ShopItemPrice>{price}</ShopItemPrice>
      </ShopItemFooter>
    </ShopItemContainer>
  );
};

export default ShopItem;
