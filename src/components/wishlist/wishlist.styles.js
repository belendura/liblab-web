import styled, { css } from "styled-components";
import { ReactComponent as FavLogo } from "../../assets/icons/heart-logo.svg";

const Small = css`
  width: 14px;
`;

const Medium = css`
  width: 20px;
`;

const Large = css`
  width: 24px;
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
  const { theme, wishlist } = props;
  if (theme === "clear" && !wishlist) return Clear;
  else if (theme === "dark" && !wishlist) return Dark;
  else if (wishlist === "true") return WishListAdded;
};

export const Container = styled(FavLogo)`
  ${getSizeStyles};
  ${getColorStyles};

  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;
