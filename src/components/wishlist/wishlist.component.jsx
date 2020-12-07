import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { toggleSectionWishlist } from "../../redux/actions/collections.actions";

import { Container } from "./wishlist.styles";

const Wishlist = ({ theme, size, item }) => {
  const dispatch = useDispatch();
  const { wishlist } = item;
  const [selected, setSelected] = useState(wishlist);

  return (
    <Container
      theme={theme}
      size={size}
      wishlist={wishlist.toString()}
      onClick={() => {
        setSelected(!selected);
        dispatch(toggleSectionWishlist(item));
      }}
    />
  );
};

export default Wishlist;
