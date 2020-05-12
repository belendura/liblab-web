import React from "react";
<UserLogo style={{ height: "40px" }} />;

import {
  SearchDropDownContainer,
  SearchBoxContainer,
  SearchBoxInput,
  SearchBoxLink,
  SearchIcon,
} from "./search-dropdown.styles";

const SearchDropDown = () => {
  return (
    <SearchDropDownContainer>
      <SearchBoxContainer>
        <SearchBoxInput
          type="search"
          placeholder="Search"
          onchange={HandleChange}
        />
        <SearchBoxLink to="/search">
          <SearchIcon />
        </SearchBoxLink>
      </SearchBoxContainer>
    </SearchDropDownContainer>
  );
};

export default SearchDropDown;
