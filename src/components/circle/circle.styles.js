import styled, { css } from "styled-components";

const mediumSizeStyled = css`
  height: 20px;
  width: 20px;
`;

const selectedColorStyled = css`
  border: 1px solid black;
`;
const getSizeStyles = (props) => {
  return props.size === "medium" ? mediumSizeStyled : null;
};

const getSelectedColorStyles = (props) => {
  return props.color.name === props.name ? selectedColorStyled : null;
};

export const CircleContainer = styled.div`
  ${getSelectedColorStyles};
  margin-right: 10px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: relative;
`;

export const CircleStyled = styled.span`
  ${getSizeStyles};
  background-color: ${(props) => `${props.code}`};
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 4px;
  left: 4px;
`;
