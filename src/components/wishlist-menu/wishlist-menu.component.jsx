import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Wishlist, Count } from "./wishlist-menu.styles";

const WishlistMenu = () => {
  const history = useHistory();
  return (
    <Container>
      <Wishlist onClick={() => history.push("/wishlist")} />
      <Count>{0}</Count>
    </Container>
  );
};

export default WishlistMenu;
