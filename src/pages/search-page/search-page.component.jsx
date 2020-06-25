import React from "react";

import SearchMenu from "../../components/search-menu/search-menu.component";
import {
  SearchPageContainer,
  SearchResultContainer,
} from "./search-page.styles.jsx";

const SearchPage = () => {
  return (
    <SearchPageContainer>
      <SearchMenu />
      <SearchResultContainer />
    </SearchPageContainer>
  );
};

export default SearchPage;
