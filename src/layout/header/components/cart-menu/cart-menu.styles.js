import styled from "styled-components";

import { ReactComponent as CartLogo } from "../../../../assets/icons/shopping-bag.svg";

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
  width: 20px;
`;

export const Count = styled.span`
  position: absolute;
  top: 7px;
  font-size: 10px;
  font-weight: bold;
`;
