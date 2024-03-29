import styled, { css } from "styled-components";

const AvailableSizeStyles = css`
  color: black;
  font-weight: bold;

  &:hover,
  &:focus {
    color: gold;
    cursor: pointer;
  }
`;

const UnavailableSizeStyles = css`
  color: grey;
`;

const WishlistSizetStyles = css`
  font-size: 1px;
  color: gold;
  font-weight: bold;
`;

const getSizeStyles = (props) => {
  return props.units > 0 ? AvailableSizeStyles : UnavailableSizeStyles;
};

const getWishlistSizeStyles = (props) => {
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
  z-index: 5;
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
  padding: 0 5px;

  ${getSizeStyles} ${getWishlistSizeStyles};
`;
