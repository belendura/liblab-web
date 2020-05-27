import React from "react";

import SearchIcon from "../../components/search-icon/search-icon.component";
import {
  SearchPageContainer,
  SearchResultContainer,
} from "./search-page.styles.jsx";

const SearchPage = () => {
  return (
    <SearchPageContainer>
      <SearchIcon />
      <SearchResultContainer />
    </SearchPageContainer>
  );
};

export default SearchPage;
