import React from "react";
import { useDispatch } from "react-redux";

import { toggleSectionWishlist } from "../../redux/actions/collections.actions";

import { WishlistContainer } from "./wishlist.styles";

const WishlistIcon = ({ theme, size, item }) => {
  const dispatch = useDispatch();
  const { Wishlist } = item;
  // console.log("Wishlist", Wishlist.toString());
  return (
    <WishlistContainer
      theme={theme}
      size={size}
      wishlist={Wishlist.toString()}
      onClick={() => dispatch(toggleSectionWishlist(item))}
    />
  );
};

export default WishlistIcon;
