import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  ${"" /* border: 1px dashed black; */}
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 10px;
`;

export const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  ${"" /* border: thin solid blue; */}
`;
