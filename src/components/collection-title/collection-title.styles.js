import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  ${"" /* border: thin solid black; */}
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 10px;
  text-transform: uppercase;
`;
export const Subtitle = styled.span`
  font-size: 12px;
`;
