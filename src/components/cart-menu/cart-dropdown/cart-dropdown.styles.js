import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  top: 110px;
  right: 40px;
  z-index: 5;
`;

export const CartDropDownEmpty = styled.span`
  margin: auto;
`;

export const CartItemTotal = styled.span`
  font-weight: bold;
  margin: 5px;
`;
