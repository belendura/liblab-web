import React from "react";

import SearchMenu from "../../components/search/search-menu/search-menu.component";
import {
 Container,
SearchContainer
} from "./search-page.styles.jsx";

const SearchPage = () => {
  return (
    <Container>
    <SearchContainer>
      <SearchMenu />
      </SearchContainer>
    </Container>
  );
};

export default SearchPage;
