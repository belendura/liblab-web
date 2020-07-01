import styled from "styled-components";

export const CollectionOrderDropDownContainer = styled.div`
  position: absolute;
  right: 200px;
  height: auto;
  width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
