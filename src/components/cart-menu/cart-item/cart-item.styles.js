import styled from "styled-components";

import { ReactComponent as BasketLogo } from "../../../assets/icons/basket-logo.svg";

export const CartItemContainer = styled.div`
  width: cover;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: thin solid gold;
`;

export const CartItemPictureContainer = styled.div`
  margin-right: 5px;
  width: 50%;
  border: thin solid brown;
`;

export const CartItemPicture = styled.img`
  width: 100%;
`;

export const CartItemInfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border: thin solid pink;
  padding: 0 5px;
`;

export const CartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

export const CartItemHeaderDetail = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const CartItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
`;

export const CartItemDetail = styled.span`
  font-size: 12px;
  margin-bottom: 2px;
`;

export const CartItemPrice = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const CartItemBasketContainer = styled.div`
  margin-left: auto;
`;

export const CartItemBasket = styled(BasketLogo)`
  cursor: pointer;
  width: 20px;

  &:hover {
    fill: gold;
  }
`;

export const LineStyled = styled.hr`
  color: grey;
  height: 0.25px;
  width: cover;
  ${"" /* background-color: grey; */}
  ${"" /* border-color: grey; */}
`;
