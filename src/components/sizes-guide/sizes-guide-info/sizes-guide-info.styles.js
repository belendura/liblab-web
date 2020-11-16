import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${"" /* border: thin solid black; */}
`;
export const Title = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  ${"" /* border: thin solid black; */}
`;

export const TableContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  ${"" /* border: thin solid black; */}
`;

export const SchemaContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  ${"" /* border: thin solid black; */}
`;
