import styled, { css } from "styled-components";

const OriginalPrice = css`
  color: grey;
  text-decoration: line-through;
  text-decoration-color: black;
`;

const SalePrice = css`
  color: red;
`;

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
  cursor: pointer;
  &:hover {
    color: gold;
    text-decoration-line: underline;
  }
  ${"" /* border: thin solid black; */}
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  ${"" /* border: thin solid black; */}
`;

export const Name = styled.span`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: bold;
`;

export const Reference = styled.span`
  text-transform: uppercase;
  font-size: 8px;
`;

export const ReviewsContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;

  &:hover,
  &:focus {
    color: gold;
  }
  ${"" /* border: thin solid black; */}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  ${"" /* border: thin solid black; */}
`;

export const Description = styled.span`
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

export const Price = styled.span`
  padding: 0 5px;
  color: black;
  ${"" /* border: thin solid black; */}
  ${getPriceStyles}
`;
export const LastPrice = styled.span`
  padding: 0 5px;
  ${"" /* border: thin solid black; */}
  ${getPriceStyles}
`;

export const DiscountContainer = styled.div`
  font-size: 10px;
  margin-top: 5px;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  align-items: flex-start;
  ${"" /* border: thin solid red; */}
`;

export const DiscountBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: red;
  padding: 5px;
`;

export const Discount = styled.span`
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

export const SizesGuideContainer = styled.div`
  margin: 10px;
`;

export const CustomButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  ${"" /* border: thin solid black; */}
`;

export const ShippingContainer = styled.div`
  font-size: 10px;
  color: grey;
  cursor: pointer;

  &:hover,
  &:focus {
    color: gold;
  }
  ${"" /* border: thin solid black; */}
`;

export const DetailsContainer = styled.div`
  margin-top: 20px;
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

export const Share = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
`;
