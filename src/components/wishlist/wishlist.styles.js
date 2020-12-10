import styled, { css } from "styled-components";
import { ReactComponent as WishlistLogo } from "../../assets/icons/heart.svg";
import { ReactComponent as WishlistRedLogo } from "../../assets/icons/heart-red.svg";

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

const getSizeStyles = (props) => {
  if (props.size === "small") return Small;
  else if (props.size === "medium") return Medium;
  else if (props.size === "large") return Large;
};

const getColorStyles = (props) => {
  const { theme } = props;
  if (theme === "clear") return Clear;
  else if (theme === "dark") return Dark;
};

export const WishlistMenu = styled(WishlistLogo)`
  ${getSizeStyles};
  ${getColorStyles};

  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;

export const WishlistRedMenu = styled(WishlistRedLogo)`
  ${getSizeStyles};
  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;
