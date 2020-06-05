import styled from "styled-components";

import { ReactComponent as FavLogo } from "../../assets/heart-logo.svg";

export const ShopItemContainer = styled.div`
  margin: 15px;
  width: 180px;
  border: 1px dotted red;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ShopItemPicture = styled.div`
  background-image: url(${(props) => props.url});
  width: 100%;
  height: 85%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ShopItemFooter = styled.div`
  height: 15%;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;
export const ShopItemFooterDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShopItemDescription = styled.span`
  font-size: 12px;
`;

export const ShopItemPrice = styled.span`
  font-size: 12px;
`;

export const ShopItemFav = styled(FavLogo)`
  width: 20px;
  position: absolute;
  bottom: 45px;
  right: 15px;
  fill: white;
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const ShopItemNew = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin: auto;
`;
