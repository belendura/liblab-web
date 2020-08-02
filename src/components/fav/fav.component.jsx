import React from "react";
import { useDispatch } from "react-redux";

import { Fav } from "./fav.styles";

const FavIcon = ({ theme, size }) => {
  const dispatch = useDispatch();

  return <Fav theme={theme} size={size} onClick={() => console.log("eyyyy")} />;
};

export default FavIcon;
