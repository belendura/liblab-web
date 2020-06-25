import styled from "styled-components";

import { ReactComponent as FilterLogo } from "../../../assets/icons/filter-logo.svg";

export const CollectionFilterMenuContainer = styled.div`
  cursor: pointer;
`;

export const CollectionFilterMenuLogo = styled(FilterLogo)`
  width: 25px;

  &:hover {
    fill: gold;
  }
`;

export const CollectionFilterMenuText = styled.span`
  font-size: 14px;
`;
