import styled, { css } from "styled-components";
import { ReactComponent as RecycledLogo } from "../../../../../../assets/icons/recycle-sign.svg";
import { ReactComponent as OrganicLogo } from "../../../../../../assets/icons/organic-sign.svg";

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
  return props.sale ? SaleStyles : null;
};

const getPriceStyles = (props) => {
  if (!props.sale) return null;
  else if (props.sale && !props.discounted) return OriginalPriceStyles;
  else return SalePriceStyles;
};

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: thin solid grey;
`;

export const PictureContainer = styled.div`
  position: relative;
  height: 0;
  padding-top: 128.28%;
  overflow: hidden;
  cursor: pointer;
`;

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UpperInfoContainer = styled.div`
  position: absolute;
  top: 15px;
  width: 10%;
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

export const BottomInfoContainer = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* border: thin solid green; */}
`;

export const Recycled = styled(RecycledLogo)`
  width: 20px;
  margin: 0 5px 0 10px;
`;

export const Organic = styled(OrganicLogo)`
  width: 20px;
  height: 25px;
  margin: 0 5px 0 10px;
`;

export const BottomInfo = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: black;
  text-transform: capitalize;
`;

export const Footer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const FooterDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.span`
  font-size: 10px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 0;
`;

export const Price = styled.span`
  font-size: 10px;
  margin-right: 10px;
  color: black;

  ${getPriceStyles};
`;

export const WishlistContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  z-index: 5;
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
