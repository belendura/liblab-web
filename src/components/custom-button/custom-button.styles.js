import styled, { css } from "styled-components";

const standardStyle = css`
  background-color: grey;
  color: white;
  border: none;

  &:hover {
    color: gold;
    background-color: grey;
    border: none;
  }
`;

const getCustomButtonStyles = (props) => {
  return props.color === "standard" ? standardStyle : null;
};

export const CustomButtonStyled = styled.button`
  margin: 10px 20px;
  padding: 10px 0;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

  ${getCustomButtonStyles}
`;
