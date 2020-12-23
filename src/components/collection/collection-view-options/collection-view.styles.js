import styled, { css } from "styled-components";

const GridViewStyles = css`
  color: black;
`;

const getViewStyles = (props) => {
const {gridView, gridOption} =props
  return (gridView === gridOption) ? GridViewStyles : null;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 5px;
  ${"" /* border: thin solid black; */}
`;

export const Title = styled.span`
  font-size: 10px;
`;

export const ViewOption = styled.span`
  font-size: 10px;
  margin: 0 5px;
  cursor: pointer;
  color: grey;
 ${getViewStyles}; 
`;

export const Separator = styled.div`
  border-left: 1px solid black;
  height: 14px;
`;
