import styled, { css } from "styled-components";

const InPairsViewStyles = css`
  color: black;
`;

const getViewStyles = (props) => {
const {inPairsView, inPairsOption} =props
  return (inPairsView === inPairsOption) ? InPairsViewStyles : null;
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

export const View = styled.span`
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
