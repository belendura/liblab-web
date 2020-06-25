import styled from "styled-components";

export const CollectionOrderDropDownContainer = styled.div`
  position: absolute;
  left: 200;
  right: 0;
  height: auto;
  width: 20vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  top: 500px;
  z-index: 5;
`;

export const CollectionOrderText = styled.span`
  padding: 10px;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    color: gold;
  }
`;
