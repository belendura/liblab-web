import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { FavIconContainer, FavLink, Fav } from "./fav-icon.styles";

const FavIcon = () => {
  const dispatch = useDispatch();
  return (
    <FavIconContainer onClick={() => dispatch()}>
      <FavLink to="/wishlist">
        <Fav />
      </FavLink>
    </FavIconContainer>
  );
};

export default FavIcon;
