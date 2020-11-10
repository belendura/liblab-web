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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  width: 40vw;
  ${"" /* border: thin solid black; */}
`;

export const NavRoute = styled.span`
  font-size: 10px;
  ${"" /* border: thin solid black; */}
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  ${"" /* border: thin solid black; */}
`;

export const ItemName = styled.span`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
`;

export const ItemReference = styled.span`
  text-transform: uppercase;
  font-size: 8px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  ${"" /* border: thin solid black; */}
`;

export const ItemDescription = styled.span`
  width: 70%;
  font-size: 12px;
  ${"" /* border: thin solid black; */}
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  ${"" /* border: thin solid black; */}
`;

export const ItemPrice = styled.span`
  padding: 0 5px;
  color: black;
  ${"" /* border: thin solid black; */}
  ${getPriceStyles}
`;
export const ItemLastPrice = styled.span`
  padding: 0 5px;
  ${"" /* border: thin solid black; */}
  ${getPriceStyles}
`;

export const DiscountContainer = styled.div`
  font-size: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${"" /* border: thin solid red; */}
`;

export const DiscountBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: red;
  padding: 5px;
`;

export const ItemDiscount = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  color: white;
`;

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  ${"" /* border: thin solid black; */}
`;

export const ColorsOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${"" /* border: thin solid black; */}
`;

export const ColorName = styled.span`
  font-size: 10px;
  padding: 5px;
`;

export const SelectSizesContainer = styled.div`
  position: relative;
  margin-top: 10px;
`;

export const SizeGuideContainer = styled.div`
  margin: 10px;
`;

export const CustomButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  ${"" /* border: thin solid black; */}
`;

export const DetailsContainer = styled.div`
  margin-top: 10px;
`;

export const Reviews = styled.div`
  padding: 10px;
`;

export const Separator = styled.hr`
  color: rgba(107, 111, 115, 0.4);
  height: 0.05px;
  width: cover;
  margin: 10px;
  background-color: rgba(107, 111, 115, 0.4);
  border-color: thin solid rgba(107, 111, 115, 0.4);
  border-radius: 0.5px;
`;
