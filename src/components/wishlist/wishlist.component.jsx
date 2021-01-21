import React, { useState, Fragment } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { toggleShopItemsWishlist } from "../../redux/actions/collections.actions";

import { WishlistMenu, WishlistRedMenu } from "./wishlist.styles";

const Wishlist = ({ theme, size, item }) => {
  const dispatch = useDispatch();
  const { wishlist } = item;
  const [selected, setSelected] = useState(wishlist);
  const user = useSelector(selectCurrentUser, shallowEqual);
  return wishlist ? (
    <WishlistRedMenu
      theme={theme}
      size={size}
      onClick={() => {
        setSelected(!selected);
        dispatch(toggleShopItemsWishlist(item, user));
      }}
    />
  ) : (
    <WishlistMenu
      theme={theme}
      size={size}
      onClick={() => {
        setSelected(!selected);
        dispatch(toggleShopItemsWishlist(item, user));
      }}
    />
  );
};

export default Wishlist;
