import styled, { css } from "styled-components";

const AvailableSizeStyles = css`
  color: black;
  font-weight: bold;
`;

const UnavailableSizeStyles = css`
  color: grey;
`;

const WishlistSizetStyles = css`
  font-size: 16px;
  color: gold;
  font-weight: bold;
`;

const getSizeStyles = (props) => {
  return props.units > 0 ? AvailableSizeStyles : UnavailableSizeStyles;
};

const getWishlisSizetStyles = (props) => {
  const { size, wishlist, selectedSize } = props;
  return wishlist && size === selectedSize ? WishlistSizetStyles : null;
};

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  background-color: rgba(192, 192, 192, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 10px;
  padding: 5px;
`;

export const SizeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Size = styled.span`
  font-size: 12px;
  margin: 5px;
  ${getSizeStyles}
  ${getWishlisSizetStyles}
`;
