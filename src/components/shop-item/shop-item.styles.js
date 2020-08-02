import styled, { css } from "styled-components";
import { ReactComponent as FavLogo } from "../../assets/icons/heart-logo.svg";
import { ReactComponent as ArrowLeftLogo } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRightLogo } from "../../assets/icons/arrow-right.svg";

const AvailableSize = css`
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const UnavailableSize = css`
  color: grey;
`;

const NewItem = css`
  background-color: grey;
`;

const Sale = css`
  background-color: red;
`;

const OriginalPrice = css`
  color: grey;
  text-decoration: line-through;
  text-decoration-color: black;
`;

const SalePrice = css`
  color: red;
`;

const getSizesStyles = (props) => {
  return props.units > 0 ? AvailableSize : UnavailableSize;
};

const getNewItemStyles = (props) => {
  if (props.sale) return Sale;
  return props.new ? NewItem : null;
};

const getPriceStyles = (props) => {
  if (!props.sale) return null;
  else if (props.sale && !props.discounted) return OriginalPrice;
  else return SalePrice;
};

export const ShopItemContainer = styled.div`
  margin: 15px;
  width: 280px;
  height: 500px;
  border: 1px dotted black;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ShopItemPicture = styled.div`
  background-image: url(${(props) => props.url});
  width: auto;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const ShopItemSizesContainer = styled.div`
  position: absolute;
  bottom: 0px;
  background-color: rgb(192, 192, 192);
  opacity: 0.5;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25%;
`;

export const ShopItemSizesTitle = styled.span`
  padding: 2px;
`;

export const ShopItemSizesItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ShopItemSizes = styled.span`
  margin: 5px;
  ${getSizesStyles}
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
  margin: 2px 0;
`;

export const ShopItemDescription = styled.span`
  font-size: 12px;
`;

export const ShopItemPriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ShopItemPrice = styled.span`
  font-size: 12px;
  margin-right: 10px;
  color: black;
  ${getPriceStyles};
`;

export const ShopItemNew = styled.div`
  position: absolute;
  top: 10px;
  width: 20%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getNewItemStyles};
`;

export const ShopItemNewText = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
`;

export const ShopItemArrowLeft = styled(ArrowLeftLogo)`
  height: 12px;
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 10px;
  z-index: 2;
`;

export const ShopItemArrowRight = styled(ArrowRightLogo)`
  height: 12px;
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
  z-index: 2;
`;

export const ShopItemColorsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px 0;
`;
