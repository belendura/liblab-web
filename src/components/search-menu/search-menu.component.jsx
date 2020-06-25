import React, { useState } from "react";

import {
  SearchBoxContainer,
  SearchBoxInput,
  Search,
  CloseMenu,
} from "./search-menu.styles";

const SearchMenu = () => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <SearchBoxContainer>
      <SearchBoxInput
        type="search"
        value={searchField}
        placeholder="Search"
        onChange={handleChange}
      />
      {searchField.length ? (
        <CloseMenu onClick={() => setSearchField("")} />
      ) : (
        <Search />
      )}
    </SearchBoxContainer>
  );
};

export default SearchMenu;
