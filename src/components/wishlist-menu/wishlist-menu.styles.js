import styled from "styled-components";

import { ReactComponent as FavLogo } from "../../assets/icons/heart-logo.svg";

export const WishlistMenuContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Wishlist = styled(FavLogo)`
  width: 45px;
  padding: 10px;
  &:hover {
    fill: gold;
  }
`;
