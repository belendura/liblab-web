import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 5px;
  ${"" /* border: thin solid black; */}
`;

export const Title = styled.span`
  font-size: 10px;
`;

export const ViewOption = styled.span`
  font-size: 10px;
  margin: 0 5px;
  cursor: pointer;
`;

export const Separator = styled.div`
  border-left: 1px solid black;
  height: 14px;
`;
