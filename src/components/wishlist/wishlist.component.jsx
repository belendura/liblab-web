import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";

import { toggleSectionWishlist } from "../../redux/actions/collections.actions";

import { WishlistMenu, WishlistRedMenu } from "./wishlist.styles";

const Wishlist = ({ theme, size, item }) => {
  const dispatch = useDispatch();
  const { wishlist } = item;
  const [selected, setSelected] = useState(wishlist);

  return wishlist ? (
    <WishlistRedMenu
      theme={theme}
      size={size}
      onClick={() => {
        setSelected(!selected);
        dispatch(toggleSectionWishlist(item));
      }}
    />
  ) : (
    <WishlistMenu
      theme={theme}
      size={size}
      onClick={() => {
        setSelected(!selected);
        dispatch(toggleSectionWishlist(item));
      }}
    />
  );
};

export default Wishlist;
