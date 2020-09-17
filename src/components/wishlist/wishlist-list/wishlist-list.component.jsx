import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectWishlistItems } from "../../../redux/selectors/wishlist.selectors";

import WishlistItem from "../wishlist-item/wishlist-item.component";

import { WishlistListContainer, WishlistText } from "./wishlist-list.styles";

const WishlistList = () => {
  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  return (
    <WishlistListContainer>
      {wishlistItems.length ? (
        wishlistItems.map((item, index) => (
          <WishlistItem item={item} key={index} />
        ))
      ) : (
        <WishlistText>Wishlist is Empty</WishlistText>
      )}
    </WishlistListContainer>
  );
};

export default WishlistList;
