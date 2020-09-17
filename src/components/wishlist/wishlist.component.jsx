import React from "react";
import { useDispatch } from "react-redux";

import { toggleWishlist } from "../../redux/actions/collections.actions";

import { WishlistContainer } from "./wishlist.styles";

const WishlistIcon = ({ theme, size, item }) => {
  const dispatch = useDispatch();
  // const { Wishlist } = item;
  return (
    <WishlistContainer
      theme={theme}
      size={size}
      // wishlist={Wishlist.toString()}
      onClick={() => dispatch(toggleWishlist(item))}
    />
  );
};

export default WishlistIcon;
