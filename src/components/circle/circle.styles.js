import styled, { css } from "styled-components";

const mediumSizeStyles = css`
  height: 12px;
  width: 12px;
`;

const selectedColorStyles = css`
  border: thin solid black;
`;
const getSizeStyles = (props) => {
  return props.size === "medium" ? mediumSizeStyles : null;
};

const getSelectedColorStyles = (props) => {
  return props.color.name === props.name ? selectedColorStyles : null;
};

export const Container = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${getSelectedColorStyles};
`;

export const CircleMenu = styled.span`
  border-radius: 50%;
  background-color: ${(props) => `${props.code}`};

  ${getSizeStyles};
`;
