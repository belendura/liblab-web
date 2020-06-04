import styled from "styled-components";

import { ReactComponent as FavLogo } from "../../assets/heart-logo.svg";

export const ShopItemContainer = styled.div`
  margin: 30px;
  width: 180px;
  border: 1px dotted red;
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}
  ${"" /* align-items: center; */}
  position: relative;
`;

export const ShopItemPicture = styled.div`
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 90%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ShopItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
`;

export const ShopItemDescription = styled.span`
font-weight:bold;
  font-size: 12px;
`;

export const ShopItemPrice = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

export const ShopItemFav = styled(FavLogo)`
  width: 20px;
  position: absolute;
  bottom: 40px;
  right: 20px;
  fill: white;

  &:hover {
    fill: gold;
  }
`;

export const ShopItemNew = styled(FavLogo)`
  width: 20px;
  position: absolute;
  bottom: 70px;

  &:hover {
    fill: gold;
  }
`;
