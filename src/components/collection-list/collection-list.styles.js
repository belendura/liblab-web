import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.inPairsView
      ? "repeat(4, minmax(200px, 1fr))"
      : "repeat(2, minmax(200px, 1fr))"};
  grid-gap: 20px;

  ${"" /* border: thin solid pink; */}
`;
