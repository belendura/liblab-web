import React from "react";
import { useHistory } from "react-router-dom";

import FavIcon from "../fav/fav.component";

import {
  ShopItemContainer,
  ShopItemPicture,
  ShopItemFooter,
  ShopItemFooterDetails,
  ShopItemDescription,
  ShopItemPrice,
  ShopItemFavContainer,
  ShopItemNew,
} from "./shop-item-preview.styles";

const ShopItemPreview = ({ url, description, price, newItem }) => {
  const history = useHistory();

  return (
    <ShopItemContainer onClick={() => history.push(`/shop/${description}`)}>
      <ShopItemPicture url={url} />
      <ShopItemFavContainer>
        <FavIcon theme="clear" size="small" />
      </ShopItemFavContainer>
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
