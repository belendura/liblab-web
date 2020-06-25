import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FavMenuContainer, Fav } from "./fav-menu.styles";

const FavMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <FavMenuContainer onClick={() => dispatch()}>
      <Fav onClick={() => history.push("/wishlist")} />
    </FavMenuContainer>
  );
};

export default FavMenu;
