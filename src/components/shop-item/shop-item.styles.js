import styled, { css } from "styled-components";

import { ReactComponent as ArrowLeftLogo } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRightLogo } from "../../assets/icons/arrow-right.svg";

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
  border: thin solid black;
  border-radius: 2px;
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

export const ArrowLeft = styled(ArrowLeftLogo)`
  position: absolute;
  top: 50%;
  height: 6px;
  left: 5px;
  cursor: pointer;
  z-index: 5;
`;

export const ArrowRight = styled(ArrowRightLogo)`
  position: absolute;
  top: 50%;
  height: 6px;
  right: 5px;
  cursor: pointer;
  z-index: 5;
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
  height: 20%;
  padding: 10px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${"" /* border: thin solid green; */}
`;
export const FooterDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemDescription = styled.span`
  font-size: 10px;
  ${"" /* border: thin solid purple; */}
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  ${"" /* border: thin solid purple; */}
`;

export const ItemPrice = styled.span`
  font-size: 10px;
  margin-right: 10px;
  color: black;
  ${getPriceStyles};
`;

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: 5px;
  ${"" /* border: thin solid purple; */}
`;
