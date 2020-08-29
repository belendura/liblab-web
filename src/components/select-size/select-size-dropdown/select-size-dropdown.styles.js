import styled, { css } from "styled-components";
import { ReactComponent as ArrowLogo } from "../../../assets/icons/arrow-up.svg";

const sizeStyles = css`
  cursor: pointer;
`;

const getSizeStyles = (props) => {
  return props.units > 0 && sizeStyles;
};

export const SelectSizeDropDownOptionsContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 35px;
  height: auto;
  width: inherit;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 5;
  border: thin solid grey;
  border-top: none;
  overflow-y: scroll;
`;

export const SelectSizeDropDownOption = styled.div`
  padding: 0 10px;
  font-size: 12px;
  &:hover {
    background-color: grey;
    ${getSizeStyles};
  }
`;

export const SelectSizeDropDownArrow = styled(ArrowLogo)`
  width: 12px;
`;
