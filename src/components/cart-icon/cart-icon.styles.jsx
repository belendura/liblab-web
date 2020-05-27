import styled from "styled-components";

import { ReactComponent as CartLogo } from "../../assets/cart-logo.svg";

export const CartIconContainer = styled.div`
  width: 45px;
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

export const Cart = styled(CartLogo)`
  width: 35px;
`;

export const CartIconCount = styled.span`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  top: 12px;
`;
