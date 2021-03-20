import styled, { css } from "styled-components";

const ColorBoxStylesDark = css`
  stroke: black;
`;
const ColorBoxStylesClear = css`
  stroke: white;
`;

const getColorBoxStyles = (props) => {
  return props.dark ? ColorBoxStylesDark : ColorBoxStylesClear;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BoxInput = styled.input`
  display: none;
`;

export const ColorBox = styled.svg`
  ${getColorBoxStyles}
  stroke-width: 4px;
  fill: none;
  margin-bottom: 6px;
`;

export const ColorBoxContainer = styled.div`
  width: 12px;
  height: 12px;
  border: thin solid black;
  background: ${(props) => `${props.code}`};
  border-radius: 1px;

  ${ColorBox} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const BoxLabel = styled.label`
  font-size: 10px;
  text-transform: lowercase;
  padding: 2.5px;
`;
