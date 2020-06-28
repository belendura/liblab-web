import styled from "styled-components";

export const CollectionFilterFitContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin 10px;
  border: 1px dashed black;
`;

export const CollectionFilterFitTitle = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  padding: 10px;
`;

export const CollectionFilterFitOptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
`;
