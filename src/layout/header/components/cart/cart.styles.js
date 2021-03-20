import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50px;
  right: 20px;
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  z-index: 5;
  border: thin solid black;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  ${"" /* border: thin solid black; */}
`;

export const Title = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Count = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const ItemsContainer = styled.div`
  margin: 0 auto;
  overflow: auto;
  max-height: 500px;
  ${"" /* border: thin solid black; */}
`;

export const Empty = styled.span`
  ${"" /* border: thin solid black; */}
`;

export const SumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  ${"" /* border: thin solid black; */}
`;

export const Sum = styled.span`
  font-size: 10px;
  font-weight: bold;
  ${"" /* border: thin solid black; */}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  ${"" /* border: thin solid black; */}
`;
