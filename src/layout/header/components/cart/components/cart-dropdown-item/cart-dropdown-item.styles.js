import styled, { css } from "styled-components";
import { ReactComponent as BasketLogo } from "../../../../../../assets/icons/basket-logo.svg";

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
  width: cover;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  ${"" /* border: thin solid black; */}
`;

export const PictureContainer = styled.div`
  margin-right: 5px;
  width: 50%;
  ${"" /* border: thin solid black; */}
`;

export const Picture = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  ${"" /* border: thin solid black; */}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const Price = styled.span`
  font-size: 10px;
  text-align: right;
  ${"" /* border: thin solid black; */}
  ${getPriceStyles}
`;

export const LastPrice = styled.span`
  font-size: 10px;
  font-weight: bold;
  ${"" /* border: thin solid black; */}
  ${getPriceStyles}
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  margin: 5px 0;
`;

export const Details = styled.span`
  font-size: 10px;
  ${"" /* margin-bottom: 5px; */}
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${"" /* border: thin solid black; */}
`;

export const QuantitySymbol = styled.span`
  margin: 0 5px;

  &:hover,
  :focus {
    color: gold;
    cursor: pointer;
  }
`;

export const Basket = styled(BasketLogo)`
  margin-left: auto;
  margin-top: auto;
  cursor: pointer;
  width: 20px;

  &:hover {
    fill: gold;
  }
`;
