import styled from "styled-components";

export const CollectionFilterColorContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content:space-between;
  margin 10px;
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
  grid-template-columns: repeat(auto-fill, minmax(1200px, 1fr));
  padding: 5px;
`;
