import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as SearchLogo } from "../../assets/search-logo.svg";

export const SearchDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const SearchBoxContainer = styled.div``;
export const SearchBoxInput = styled.input``;

export const SearchBoxLink = styled(Link)``;

export const SearchIcon = styled(SearchLogo)`
  height: 35px;
`;
