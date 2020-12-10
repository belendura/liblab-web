import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  width: 110px;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  background-color: white;
  padding: 0 5px;
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
