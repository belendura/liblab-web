import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  height: 100px;

  min-width: 15%;
  ${"" /* border: thin solid black; */}
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 10px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 80%;
  ${"" /* border: thin solid black; */}
`;
