import styled, { css } from "styled-components";
import { ReactComponent as ArrowLogo } from "../../../assets/icons/arrow-up.svg";

const sizeStyles = css`
  cursor: pointer;
`;

const getSizeStyles = (props) => {
  return props.units > 0 && sizeStyles;
};

export const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 25px;
  width: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  z-index: 5;
  border: thin solid grey;
  border-top: none;
`;

export const SizeOption = styled.div`
  font-size: 10px;

  &:hover {
    background-color: rgba(107, 111, 115, 0.2);
    ${getSizeStyles};
  }
`;
