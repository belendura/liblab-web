import styled, { css } from "styled-components";

const standardStyled = css`
  background-color: grey;
  color: white;
  border: none;

  &:hover {
    color: gold;
    background-color: grey;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  switch (props.color) {
    case "standard":
      return standardStyled;

    default:
      break;
  }
};

export const ButtonStyled = styled.button`
  margin: 10px 20px;
  padding: 10px 0;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;

  ${getButtonStyles}
`;
