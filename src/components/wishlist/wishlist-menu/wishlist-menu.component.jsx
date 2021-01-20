import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectWishlistItems } from "../../../redux/selectors/wishlist.selectors";

import { Container, Wishlist, WishlistRed } from "./wishlist-menu.styles";

const WishlistMenu = () => {
  const history = useHistory();
  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  return (
    <Container onClick={() => history.push("/wishlist")}>
      {wishlistItems && wishlistItems.length>0? <WishlistRed /> : <Wishlist />}
    </Container>
  );
};

export default WishlistMenu;
