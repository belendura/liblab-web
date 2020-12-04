import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectWishlistItems } from "../../../redux/selectors/wishlist.selectors";

import WishlistItem from "../wishlist-item/wishlist-item.component";

import { Container, WishlistContainer, Text } from "./wishlist-list.styles";

const WishlistList = () => {
  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  return (
    <Container>
      {wishlistItems.length ? (
        <WishlistContainer>
          {wishlistItems.map((item, index) => (
            <WishlistItem item={item} key={index} />
          ))}
        </WishlistContainer>
      ) : (
        <Text>Wishlist is Empty</Text>
      )}
    </Container>
  );
};

export default WishlistList;
