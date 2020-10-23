import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { toggleItem } from "../../redux/actions/wishlist.actions";

import WishlistIcon from "../wishlist/wishlist.component";

import {
  ShopItemContainer,
  ShopItemPicture,
  ShopItemFooter,
  ShopItemFooterDetails,
  ShopItemDescription,
  ShopItemPrice,
  ShopItemWishlistContainer,
  ShopItemNew,
} from "./shop-item-preview.styles";

const ShopItemPreview = ({ item }) => {
  const { Url, Description, LastPrice, New } = item;
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <ShopItemContainer onClick={() => history.push(`/shop/${Description}`)}>
      <ShopItemPicture url={Url[0]} />
      <ShopItemFooter>
        <ShopItemNew newItem={New}> NEW</ShopItemNew>
        <ShopItemWishlistContainer>
          <WishlistIcon theme="dark" size="small" item={item} />
        </ShopItemWishlistContainer>
        <ShopItemFooterDetails>
          <ShopItemDescription>{Description}</ShopItemDescription>
          <ShopItemPrice>{LastPrice}EUR</ShopItemPrice>
        </ShopItemFooterDetails>
      </ShopItemFooter>
    </ShopItemContainer>
  );
};

export default ShopItemPreview;
