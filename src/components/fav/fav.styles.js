import styled, { css } from "styled-components";
import { ReactComponent as FavLogo } from "../../assets/icons/heart-logo.svg";

const SmallClear = css`
  width: 20px;
  fill: white;
`;
const SmallDark = css`
  width: 20px;
  fill: red;
`;

const MediumClear = css`
  width: 35px;
  fill: white;
`;
const MediumDark = css`
  width: 35px;
  fill: red;
`;

const LargeClear = css`
  width: 35px;
  fill: white;
`;
const LargeDark = css`
  width: 35px;
  fill: red;
`;

const getFavStyles = (props) => {
  if (props.size == "small" && props.theme == "clear") return SmallClear;
  else if (props.size == "small" && props.theme == "dark") return SmallDark;
  else if (props.size == "medium" && props.theme == "clear") return MediumClear;
  else if (props.size == "medium" && props.theme == "dark") return MediumDark;
  else if (props.size == "large" && props.theme == "clear") return LargeClear;
  else return LargeDark;
};

export const Fav = styled(FavLogo)`
  ${getFavStyles};

  cursor: pointer;

  &:hover {
    fill: gold;
  }
`;
