import React from "react";
import { useDispatch } from "react-redux";

import { SearchIconContainer, Search } from "./search-icon.styles";

const SearchIcon = () => {
  const dispatch = useDispatch();
  return (
    <SearchIconContainer onClick={() => dispatch()}>
      <Search />
    </SearchIconContainer>
  );
};

export default SearchIcon;
