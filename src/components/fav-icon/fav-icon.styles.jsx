import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as FavLogo } from "../../assets/heart-logo.svg";

export const FavIconContainer = styled.div`
  width: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FavLink = styled(Link)`
  width: 40px;
`;

export const Fav = styled(FavLogo)`
  width: 35px;

  &:hover {
    fill: gold;
  }
`;

export const FavIconSelected = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  top: 28px;
`;
