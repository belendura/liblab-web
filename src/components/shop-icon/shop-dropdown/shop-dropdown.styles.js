import styled from "styled-components";
import { Link } from "react-router-dom";

export const ShopDropDownContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  background-color: white;
  top: 110px;
  z-index: 5;
`;

export const MenuContainer = styled.div`
  width: 40vw;
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  padding: 10px;
`;

export const ShopOverviewContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  padding: 0 30px;
  border: 1px black dashed;
`;

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const CollectionLink = styled(Link)`
  font-weight: bold;
  padding: 10px 0;

  &:hover {
    color: gold;
  }
`;

export const CategoryLink = styled(Link)`
  font-size: 14px;
  padding: 10px 0;

  &:hover {
    color: gold;
  }
`;
