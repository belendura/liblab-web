import styled from "styled-components";

export const CollectionFilterColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin 10px;
  width: 40vw;
  border: 1px dashed black;
`;

export const CollectionFilterColorTitle = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  padding: 10px;
`;

export const CollectionFilterColorOptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  padding: 5px;
`;
