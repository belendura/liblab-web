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
  width: cover;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
 border: thin solid black; 
`;

export const PictureContainer = styled.div`
  margin-right: 5px;
  width: 10%;
  ${"" /* border: thin solid black; */}
`;

export const Picture = styled.img`
  width: 100%;
`;

export const Details = styled.span`
text-align:center;
  font-size: 10px;
  text-transform:uppercase;
  width:10%;
  ${"" /* margin-bottom: 5px; */}
`;

export const PriceContainer=styled.div`
width:10%;
display:flex;
justify-content:center;
`
export const Price = styled.span`
  font-size: 10px;
  margin-right:5px;
  ${"" /* border: thin solid black; */}
  ${getPriceStyles}
`;

export const LastPrice = styled.span`
  font-size: 10px;
  font-weight: bold;
  ${"" /* border: thin solid black; */}
  ${getPriceStyles}
`;

export const QuantityContainer = styled.div`
  width:10%;
  display: flex;
  justify-content:center;
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