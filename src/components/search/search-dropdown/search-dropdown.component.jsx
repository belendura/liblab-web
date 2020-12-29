import React, {useState} from "react";

import RecentViewPreview from "../recent-view-preview/recent-view-preview.component"
import RecentSearch from "../recent-search/recent-search.component"

import {
  Container,
 RecentSearchesContainer,
 RecentSearches,
  RecentViewedContainer,
  Title,
} from "./search-dropdown.styles";

const SearchDropDown = ({recentSearchesList, setRecentSearchesList, setSearchVisibility}) => {
  const [recentViewedList, setRecentViewedList]=useState(JSON.parse(localStorage.getItem("recentviewed")));

  return (
    <Container>
      <RecentSearchesContainer>
      <Title>Recent Searches</Title>
        <RecentSearches>
        {
        recentSearchesList && recentSearchesList.filter((item,index)=> index<10).map((item,index)=> <RecentSearch key={index} item={item} recentSearchesList={recentSearchesList} setRecentSearchesList={setRecentSearchesList}/>)
      }
      </RecentSearches>
      </RecentSearchesContainer>
      <RecentViewedContainer>
      <Title>The last thing you viewed...</Title>
      {recentViewedList && recentViewedList.filter((item,index)=> index<6).map((item,index)=> <RecentViewPreview  key={index} setSearchVisibility={setSearchVisibility} item={item}/>)}
      </RecentViewedContainer>
    </Container>
  );
};

export default SearchDropDown;
