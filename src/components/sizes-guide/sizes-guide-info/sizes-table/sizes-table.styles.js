import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  ${"" /* border: thin solid black; */}
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  ${"" /* border: thin solid black; */}
`;

export const ColumnTitle = styled.span`
  text-align: center;
  padding-bottom: 10px;
  font-size: 10px;
  font-weight: bold;
  ${"" /* border: thin solid black; */}
`;

export const Item = styled.span`
  text-align: center;
  font-size: 10px;
  padding-bottom: 5px;
  ${"" /* border: thin solid black; */}
`;
