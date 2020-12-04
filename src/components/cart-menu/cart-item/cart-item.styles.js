import styled from "styled-components";

import { ReactComponent as BasketLogo } from "../../../assets/icons/basket-logo.svg";

export const Container = styled.div`
  width: cover;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: thin solid gold;
`;

export const PictureContainer = styled.div`
  margin-right: 5px;
  width: 50%;
  border: thin solid brown;
`;

export const Picture = styled.img`
  width: 100%;
`;

export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border: thin solid pink;
  padding: 0 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

export const HeaderDetail = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
`;

export const Details = styled.span`
  font-size: 12px;
  margin-bottom: 2px;
`;

export const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const BasketContainer = styled.div`
  margin-left: auto;
`;

export const Basket = styled(BasketLogo)`
  cursor: pointer;
  width: 20px;

  &:hover {
    fill: gold;
  }
`;

export const Line = styled.hr`
  color: grey;
  height: 0.25px;
  width: cover;
  ${"" /* background-color: grey; */}
  ${"" /* border-color: grey; */}
`;
