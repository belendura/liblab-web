import React, { useState, useEffect} from "react";
import {useDispatch} from "react-redux"

import {fetchSearchStart} from "../../../redux/actions/shop.actions"

import {
Container,
  Input,
  Search,
  Close,
} from "./search-menu.styles";

const SearchMenu = () => {
  const [searchField, setSearchField] = useState("");
  const dispatch=useDispatch();
  // const [filteredStates, setFilteredStates] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    searchField && dispatch(fetchSearchStart(searchField))
    // const filter = states.filter(state => {
    //   return state.name.toLowerCase().includes(search.toLowerCase());
    // });

    // setFilteredStates(filter);
  }, 1000);

  return () => clearTimeout(timer);
}, [searchField]);

  return (
    <Container>{
      console.log("searchField",searchField)
    }
      <Input
        type="text"
        value={searchField}
        placeholder="Search"
        onChange={handleChange}
      />
      {searchField.length ? (
        <Close onClick={() => setSearchField("")} />
      ) : (
        <Search />
      )}
    </Container>
  );
};

export default SearchMenu;
