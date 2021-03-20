import styled, { css } from "styled-components";

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
  top: 30px;
  background-color: white;
  z-index: 5;
  border: thin solid grey;
  border-top: none;
`;

export const SizeOption = styled.div`
  font-size: 10px;

  &:hover {
    background-color: rgba(107, 111, 115, 0.2);
    cursor: pointer;
    ${getSizeStyles};
  }
`;
