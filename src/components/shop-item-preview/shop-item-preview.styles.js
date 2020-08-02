import styled from "styled-components";

export const ShopItemContainer = styled.div`
  margin: 15px;
  width: 180px;
  border: 1px dotted black;
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
  margin: 5px 0;
`;

export const ShopItemDescription = styled.span`
  font-size: 12px;
`;

export const ShopItemPrice = styled.span`
  font-size: 12px;
`;

export const ShopItemFavContainer = styled.div`
  position: absolute;
  bottom: 45px;
  right: 15px;
`;

export const ShopItemNew = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin: auto;
  color: ${(props) => {
    return props.newItem ? "black" : "transparent";
  }};
`;
