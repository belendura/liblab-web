import styled from "styled-components";

import { ReactComponent as FilterLogo } from "../../../assets/icons/white-glasses.svg";

export const SidebarContainer = styled.div`
  position: absolute;
  top: 425px;
  left: -200px;
  z-index: 10;
  height: auto;

  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out; /** Chrome & Safari **/
  -moz-transition: all 1s ease-in-out; /** Firefox **/
  -o-transition: all 1s ease-in-out; /** Opera **/
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: 100%;
  padding: 0 5px;

  &:hover {
    ${SidebarContainer} {
      transform: translate(200px, 0);
      -webkit-transform: translate(200px, 0); /** Chrome & Safari **/
      -o-transform: translate(200px, 0); /** Opera **/
      -moz-transform: translate(200px, 0); /** Firefox **/
    }
  }
`;

export const SidebarMenu = styled(FilterLogo)`
  height: 30px;
  margin: 0 -10px;

  &:hover {
    fill: gold;
  }
`;

export const Title = styled.span`
  font-size: 10px;
  &:hover {
    color: gold;
  }
`;
