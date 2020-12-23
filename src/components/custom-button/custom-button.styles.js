import styled, { css } from "styled-components";

const standardStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: rgba(107, 111, 115, 0.4);
    border: none;
  }
`;

const getCustomButtonStyles = (props) => {
  return props.color === "standard" ? standardStyle : null;
};

export const Button = styled.button`
  width: 200px;
  padding: 10px;
  margin: 5px 0;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;

  ${getCustomButtonStyles}
`;
