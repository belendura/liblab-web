import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {
  selectSearchLoaded,
  selectSearchParams,
} from "../../redux/selectors/collections.selectors";

import {
  clearShopItems,
  resetSearchLoaded,
} from "../../redux/actions/collections.actions";

import FilterBar from "../../components/filter-bar";
import SearchList from "./components/search-list";

import { Container, Title } from "./search-page.styles.jsx";

const SearchPage = () => {
  const dispatch = useDispatch();
  const searchParams = useSelector(selectSearchParams, shallowEqual);
  const searchLoaded = useSelector(selectSearchLoaded, shallowEqual);

  useEffect(() => {
    dispatch(clearShopItems());
    return () => {
      dispatch(resetSearchLoaded());
    };
  }, []);

  return (
    <Container>
      {searchLoaded && (
        <Title>
          SEARCH RESULTS FOR{" "}
          <span style={{ fontWeight: "bold" }}>
            "{searchParams.toUpperCase()}"
          </span>
        </Title>
      )}
      {searchLoaded && <FilterBar />}
      <SearchList />
    </Container>
  );
};

export default SearchPage;
