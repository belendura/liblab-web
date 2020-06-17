import styled from "styled-components";

export const CollectionFilterSizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin 10px;
  border: 1px dashed black;
  
`;

export const CollectionFilterSizeTitle = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  padding: 10px;
`;

export const CollectionFilterSizeOptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
`;
