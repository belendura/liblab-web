import React, {useEffect} from "react";
import {useSelector, shallowEqual, useDispatch} from "react-redux"

import {
  selectSearchLoaded, 
  selectSearchParams
} from "../../redux/selectors/collections.selectors";

import {clearSection,resetSearchLoaded } from "../../redux/actions/collections.actions"

import CollectionFilter from "../../components/collection/collection-filter/collection-filter.component";
import SearchList from "../../components/search/search-list/search-list.component";

import {
 Container,
 Title,
} from "./search-page.styles.jsx";

const SearchPage = () => {
  const dispatch=useDispatch(); 
  const searchParams=useSelector(selectSearchParams,shallowEqual);
  const searchLoaded=useSelector(selectSearchLoaded,shallowEqual);
 
  useEffect(() => {
   dispatch(clearSection())
   return()=>{
dispatch(resetSearchLoaded())
   }
    }, []);

  return (
    <Container>
    { searchLoaded && <Title>SEARCH RESULTS FOR <span style={{fontWeight:"bold"}}>"{searchParams.toUpperCase()}"</span></Title>}
    { searchLoaded && <CollectionFilter /> }
       <SearchList/>
    </Container>
  );
};

export default SearchPage;
