import styled, { css } from "styled-components";

const mediumSizeStyled = css`
  height: 20px;
  width: 20px;
`;

export const CircleStyled = styled.span`
  ${mediumSizeStyled};
  background-color: ${(props) => `${props.color.code}`};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
  margin-right: 2px;
`;
