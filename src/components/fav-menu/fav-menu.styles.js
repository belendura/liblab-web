import styled from "styled-components";

import { ReactComponent as FavLogo } from "../../assets/icons/heart-logo.svg";

export const FavMenuContainer = styled.div`
  width: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Fav = styled(FavLogo)`
  width: 35px;

  &:hover {
    fill: gold;
  }
`;

export const FavMenuSelected = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  top: 28px;
`;