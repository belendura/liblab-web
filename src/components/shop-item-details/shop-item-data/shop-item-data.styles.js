import styled, { css } from "styled-components";
import { ReactComponent as HangerLogo } from "../../../assets/icons/hanger.svg";
import arrow_down from "../../../assets/icons/arrow-down.svg";
import arrow_up from "../../../assets/icons/arrow-up.svg";

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

const getPriceStyles = (props) => {
  if (!props.sale) return null;
  else if (props.sale && !props.discounted) return OriginalPrice;
  else return SalePrice;
};

// const changeArrowDirection = (props) => {
//   props. ?
// };

export const ShopItemDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: 30vw;
  margin-left: 20px;
`;

export const ShopItemDataName = styled.span`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

export const ShopItemDataReference = styled.span`
  text-transform: uppercase;
  font-size: 10px;
  margin: 10px;
`;

export const ShopItemDataPriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ShopItemDataPrice = styled.span`
  margin-right: 10px;
  color: black;
  ${getPriceStyles}
`;
export const ShopItemDataLastPrice = styled.span`
  margin-right: 10px;
  ${getPriceStyles}
`;

export const ShopItemDataDiscountContainer = styled.div`
  margin: 0 10px;
  width: 20%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const ShopItemDataDiscount = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
`;

export const ShopItemDataColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  border: 1px solid black;
`;

export const ShopItemDataColorsOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  border: 1px solid black;
`;

export const ShopItemDataColorName = styled.span``;

export const ShopItemDataSelectSizesContainer = styled.div`
  width: 200px;
  position: relative;
  margin: 20px 0;
`;

export const ShopItemDataSelectSize = styled.select`
  background-color: white;
  border: thin solid grey;
  display: inline-block;
  line-height: 1.5em;
  width: 300px;
  padding: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image: url(${arrow_down});
  background-size: 20px;
  background-position: 95% center;
  background-repeat: no-repeat;

  &:hover {
    border: 1px solid black;
  }

  &:focus {
    background-image: url(${arrow_up});
    background-repeat: no-repeat;
  }
`;

export const ShopItemDataOptionSize = styled.option`
  ${getSizesStyles}

  &:focus, &:hover {
    color: pink;
    ${ShopItemDataSelectSize} {
      background-image: url(${arrow_down}) !important;
      background-repeat: no-repeat;
    }
  }
`;

export const ShopItemDataSizeGuideContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const SizeHanger = styled(HangerLogo)`
  width: 24px;
  height: auto;
`;

export const ShopItemDataGuideSize = styled.span`
  text-decoration: underline;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    color: gold;
  }
`;

export const DescriptionContainer = styled.div`
  padding: 10px;
`;
export const FabricContainer = styled.div`
  padding: 10px;
`;
export const ShippingInformation = styled.div`
  padding: 10px;
`;

export const Reviews = styled.div`
  padding: 10px;
`;

export const LineStyled = styled.hr`
  color: grey;
  height: 0.25px;
  width: cover;
  margin: 5px;
  background-color: grey;
  border-color: grey;
`;
