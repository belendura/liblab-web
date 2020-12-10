import styled from "styled-components";

import { ReactComponent as WishlistLogo } from "../../../assets/icons/heart.svg";
import { ReactComponent as WishlistRedLogo } from "../../../assets/icons/heart-red.svg";

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

export const Wishlist = styled(WishlistLogo)`
  width: 28px;
  }
`;

export const WishlistRed = styled(WishlistRedLogo)`
  width: 28px;
  }
`;
