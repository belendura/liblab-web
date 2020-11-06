import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as SearchLogo } from "../../assets/icons/search-logo.svg";
import { ReactComponent as CloseLogo } from "../../assets/icons/close-logo.svg";

export const SearchBoxContainer = styled.div`
  position: relative;
  width: 400px;
  display: flex;
  justify-content: space-between;
  border: 1px dotted black;
  padding: 20px;
`;
export const SearchBoxInput = styled.input`
  width: 300px;
`;

export const SearchBoxLink = styled(Link)`
  padding: 10px;
`;

export const Search = styled(SearchLogo)`
  width: 45px;
`;

export const CloseMenu = styled(CloseLogo)`
  position: absolute;
  top: 0px;
  left: 370px;
  width: 30px;
`;
