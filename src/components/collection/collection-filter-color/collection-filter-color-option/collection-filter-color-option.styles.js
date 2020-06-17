import styled, { css } from "styled-components";

const IconStylesDark = css`
  stroke: black;
`;
const IconStylesClear = css`
  stroke: white;
`;

const getIconStyles = (props) => {
  return props.dark ? IconStylesDark : IconStylesClear;
};

export const CollectionFilterColorOptionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CollectionFilterColorOptionInput = styled.input`
  display: none;
`;

export const Icon = styled.svg`
  ${getIconStyles}
  stroke-width: 4px;
  fill: none;
  margin-bottom: 4px;
`;

export const CollectionFilterColorOptionStyled = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid black;
  background: ${(props) => `${props.code}`};
  border-radius: 3px;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const CollectionFilterColorOptionLabel = styled.label`
  tex-transform: lowercase;
  padding: 5px;
`;
