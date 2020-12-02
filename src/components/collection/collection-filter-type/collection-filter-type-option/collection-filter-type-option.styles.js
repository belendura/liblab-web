import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BoxInput = styled.input`
  display: none;
`;

export const TypeBox = styled.svg`
  stroke: black;
  stroke-width: 4px;
  fill: none;
  margin-bottom: 6px;
`;

export const TypeBoxContainer = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid black;
  background: #eee;
  border-radius: 1px;

  ${SizeBox} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const BoxLabel = styled.label`
  font-size: 10px;
  text-transform: lowercase;
  padding: 2.5px;
`;
