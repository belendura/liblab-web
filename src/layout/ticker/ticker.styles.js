import styled from "styled-components";

export const Container = styled.div`
  height: 30px;
  background: rgba(107, 111, 115, 0.4);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${"" /* border: thin solid black; */};
`;

export const MainText = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: white;
`;

export const SecondaryText = styled.span`
  font-size: 10px;
  color: white;
`;
