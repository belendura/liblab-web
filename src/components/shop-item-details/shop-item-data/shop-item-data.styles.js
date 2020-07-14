import styled, { css } from "styled-components";

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

export const ShopItemDataContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 30vw;
`;

export const Name = styled.span`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
`;

export const Reference = styled.span`
  text-transform: uppercase;
  font-size: 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Price = styled.span`
  ${getSizesStyles}
`;
export const LastPrice = styled.span`
  ${getSizesStyles}
`;
export const Discount = styled.span`
  ${getSizesStyles}
`;

export const ColorsContainer = styled.div`
  display: flex;
`;

export const Color = styled.span``;
export const ColorName = styled.span``;
export const SizesContainer = styled.div``;

export const Size = styled.span``;

export const HelpSize = styled.span`
  text-decoration: underline;
  cursor: pointer;
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
