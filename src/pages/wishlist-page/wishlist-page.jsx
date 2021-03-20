import React from "react";

import WishlistList from "./components/wishlist-list";
import { WishlistPageContainer } from "./wishlist-page.styles";

const WishlistPage = () => {
  return (
    <WishlistPageContainer>
      <WishlistList />
    </WishlistPageContainer>
  );
};

export default WishlistPage;
