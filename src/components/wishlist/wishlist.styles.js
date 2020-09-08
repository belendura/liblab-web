import styled, { css } from "styled-components";
import { ReactComponent as FavLogo } from "../../assets/icons/heart-logo.svg";

const Small = css`
  width: 20px;
`;

const Medium = css`
  width: 35px;
`;

const Large = css`
  width: 35px;
`;

const Clear = css`
  fill: white;
`;

const Dark = css`
  fill: black;
`;

const WishListAdded = css`
  fill: red;
`;

const getSizeStyles = (props) => {
  if (props.size === "small") return Small;
  else if (props.size === "medium") return Medium;
  else if (props.size === "large") return Large;
};

const getColorStyles = (props) => {
  if (props.theme === "clear" && !props.wishlist) return Clear;
  else if (props.theme === "dark" && !props.wishlist) return Dark;
  else if (props.wishlist === "true") return WishListAdded;
};

export const WishlistContainer = styled(FavLogo)`
  ${getSizeStyles};
  ${getColorStyles};

  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;
