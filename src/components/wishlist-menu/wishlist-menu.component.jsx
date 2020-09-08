import React from "react";
import { useHistory } from "react-router-dom";

import { WishlistMenuContainer, Wishlist } from "./wishlist-menu.styles";

const WishlistMenu = () => {
  const history = useHistory();
  return (
    <WishlistMenuContainer>
      <Wishlist onClick={() => history.push("/wishlist")} />
    </WishlistMenuContainer>
  );
};

export default WishlistMenu;
