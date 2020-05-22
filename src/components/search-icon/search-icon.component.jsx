import React, { useState } from "react";

import {
  SearchBoxContainer,
  SearchBoxInput,
  Search,
  CloseIcon,
} from "./search-icon.styles";

const SearchIcon = () => {
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
        <CloseIcon onClick={() => setSearchField("")} />
      ) : (
        <Search />
      )}
    </SearchBoxContainer>
  );
};

export default SearchIcon;
