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

const ShopItemPreview = ({ url, description, price, newItem }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <ShopItemContainer onClick={() => history.push(`/shop/${description}`)}>
      <ShopItemPicture url={url} />
      <ShopItemWishlistContainer>
        {/* <WishlistIcon
          theme="clear"
          size="small"

          onClick={() => dispatch(toggleItem())}
        /> */}
      </ShopItemWishlistContainer>
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
