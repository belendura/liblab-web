import styled from "styled-components";

import { ReactComponent as FilterLogo } from "../../../../assets/icons/filter-icon.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  height: 100%;
  padding: 0 5px;
  ${"" /* border: thin solid black; */}
`;

export const Filter = styled(FilterLogo)`
  height: 30px;
  margin-right: 5px;

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
