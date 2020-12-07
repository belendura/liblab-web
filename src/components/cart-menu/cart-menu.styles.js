import styled from "styled-components";

import { ReactComponent as CartLogo } from "../../assets/icons/cart-logo.svg";

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

export const Cart = styled(CartLogo)`
  width: 45px;
  padding: 10px;
`;

export const Count = styled.span`
  position: absolute;
  font-weight: bold;
  top: 16px;
`;
