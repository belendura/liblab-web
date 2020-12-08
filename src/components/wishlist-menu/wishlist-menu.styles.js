import styled from "styled-components";

import { ReactComponent as FavLogo } from "../../assets/icons/heart-logo.svg";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    fill: gold;
    color: gold;
  }
`;

export const Wishlist = styled(FavLogo)`
  width: 28px;

  }
`;

export const Count = styled.span`
  position: absolute;
  top: 6px;
  font-size: 12px;
  font-weight: bold;
`;
