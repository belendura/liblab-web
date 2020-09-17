import React from "react";

import WishlistList from "../../components/wishlist/wishlist-list/wishlist-list.component";
import { WishlistPageContainer } from "./wishlist-page.styles";

const WishlistPage = () => {
  return (
    <WishlistPageContainer>
      <WishlistList />
    </WishlistPageContainer>
  );
};

export default WishlistPage;
