import styled from "styled-components";

import { ReactComponent as SearchLogo } from "../../assets/search-logo.svg";

export const SearchIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Search = styled(SearchLogo)`
  height: 35px;
  position: absolute;
  top: 20px;
`;
