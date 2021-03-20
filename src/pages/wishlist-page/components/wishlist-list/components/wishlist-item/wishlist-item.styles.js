import styled, { css } from "styled-components";

import { ReactComponent as BasketLogo } from "../../../../../../assets/icons/basket-logo.svg";

const UpperInfoStyles = css`
  background-color: rgba(107, 111, 115, 0.6);
`;

const SaleStyles = css`
  background-color: red;
`;

const OriginalPriceStyles = css`
  color: grey;
  text-decoration: line-through;
  text-decoration-color: black;
`;

const SalePriceStyles = css`
  color: red;
`;

const getUpperInfoStyles = (props) => {
  if (props.sale) return SaleStyles;
  return props.new ? UpperInfoStyles : null;
};

const getPriceStyles = (props) => {
  if (!props.sale) return null;
  else if (props.sale && !props.discounted) return OriginalPriceStyles;
  else return SalePriceStyles;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: thin solid grey;
`;

export const PictureContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 0;
  padding-top: 100%;
`;

export const Picture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const UpperInfoContainer = styled.div`
  position: absolute;
  top: 15px;
  width: 15%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getUpperInfoStyles};
`;

export const UpperInfo = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

export const Footer = styled.div`
  height: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  ${"" /* border: thin solid black; */}
`;

export const FooterUpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${"" /* border: thin solid black; */}
`;

export const Name = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.span`
  font-size: 10px;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  ${"" /* border: thin solid black; */}
`;

export const Price = styled.span`
  font-size: 10px;
  margin-right: 10px;
  color: black;
  ${getPriceStyles};
  ${"" /* border: thin solid black; */}
`;

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  ${"" /* border: thin solid black; */}
`;

export const BasketContainer = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* border: thin solid black;  */}
`;

export const Basket = styled(BasketLogo)`
  cursor: pointer;
  width: 20px;

  &:hover {
    fill: gold;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  padding-top: 5px;
`;

export const NewItem = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 auto 5px;
  color: ${(props) => {
    return props.newItem ? "black" : "transparent";
  }};
`;
