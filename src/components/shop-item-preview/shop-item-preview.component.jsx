import React from "react";
import { useHistory } from "react-router-dom";

import {
  ShopItemContainer,
  ShopItemPicture,
  ShopItemFooter,
  ShopItemFooterDetails,
  ShopItemDescription,
  ShopItemPrice,
  ShopItemFav,
  ShopItemNew,
} from "./shop-item-preview.styles";

const ShopItemPreview = ({ url, description, price, newItem }) => {
  const history = useHistory();

  return (
    <ShopItemContainer onClick={() => history.push(`/shop/${description}`)}>
      <ShopItemPicture url={url} />
      <ShopItemFav />
      <ShopItemFooter>
        <ShopItemNew newItem={newItem}> NEW</ShopItemNew>
        <ShopItemFooterDetails>
          <ShopItemDescription>{description}</ShopItemDescription>
          <ShopItemPrice>{price}EUR</ShopItemPrice>
        </ShopItemFooterDetails>
      </ShopItemFooter>
    </ShopItemContainer>
  );
};

export default ShopItemPreview;
