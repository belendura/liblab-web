import styled from "styled-components";

import { ReactComponent as FilterLogo } from "../../../assets/icons/filter-logo.svg";

export const CollectionFilterSidebarContainer = styled.div`
  position: absolute;
  top: 500px;
  left: -200px;
  z-index: 5;

  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
  -moz-transition: all 1s ease-in-out; /** Firefox **/
  -o-transition: all 1s ease-in-out; /** Opera **/
`;

export const CollectionFilterMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px dotted black;
  heigth: 70px;



  &:hover {
   ${CollectionFilterSidebarContainer}{
    transform: translate(200px, 0);
    -webkit-transform: translate(200px, 0); /** Chrome & Safari **/
    -o-transform: translate(200px, 0); /** Opera **/
    -moz-transform: translate(200px, 0); /** Firefox **/
  }
`;

export const CollectionFilterMenuLogo = styled(FilterLogo)`
  width: 25px;
  height: 25px;
  margin: 10px;

  &:hover {
    fill: gold;
  }
`;

export const CollectionFilterMenuText = styled.span`
  font-size: 14px;
  margin: 10px;
`;
