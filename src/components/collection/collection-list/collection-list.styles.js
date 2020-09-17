import styled from "styled-components";

export const CollectionListContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.reducedDisplayedItems
      ? "repeat(2, minmax(240px, 1fr))"
      : "repeat(4, minmax(240px, 1fr))"};
  object-fit: cover;
  grid-gap: 20px;
  height: 95vh;
  margin: 10px 0px;
`;
