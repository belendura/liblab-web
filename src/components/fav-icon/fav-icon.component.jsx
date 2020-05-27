import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FavIconContainer, Fav } from "./fav-icon.styles";

const FavIcon = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <FavIconContainer onClick={() => dispatch()}>
      <Fav onClick={() => history.push("/wishlist")} />
    </FavIconContainer>
  );
};

export default FavIcon;
