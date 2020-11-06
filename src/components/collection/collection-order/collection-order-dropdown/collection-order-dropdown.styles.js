import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 390px;
  right: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 10px 20px 0px 20px;
  z-index: 5;
  ${"" /* border: thin solid black; */}
`;

export const OrderOption = styled.span`
  font-size: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;
