import styled from "styled-components";

export const CollectionFilterSizeOptionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CollectionFilterSizeOptionInput = styled.input`
  display: none;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
  margin-bottom: 4px;
`;

export const CollectionFilterSizeOptionStyled = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid black;
  background: ${(props) => (props.checked ? "#2196F3" : "#eee")};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const CollectionFilterSizeOptionLabel = styled.label`
  tex-transform: lowercase;
  padding: 5px;
`;
