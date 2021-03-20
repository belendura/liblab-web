import React from "react";

import { Container,Text, Close } from "./recent-search.styles";

const RecentSearch = ({ item, recentSearchesList, setRecentSearchesList}) => {

const clearSearch=(item)=>{
  const searchesList=recentSearchesList.filter(filterItem=>filterItem !==item);
  setRecentSearchesList(searchesList);
  localStorage.setItem("recentsearches",JSON.stringify(searchesList))
}
  return (
      <Container>
        <Text>{item}</Text>
       <Close onClick={()=>clearSearch(item)}/>
     </Container>)
 
};

export default RecentSearch;
