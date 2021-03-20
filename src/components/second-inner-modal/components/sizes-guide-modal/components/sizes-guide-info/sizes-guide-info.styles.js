import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  ${"" /* border: thin solid black; */}
`;

export const SchemaContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
`;
