import React, {useState, useEffect}from "react";
import {useDispatch} from "react-redux"

import {fetchSearchStart, resetSearchLoaded} from "../../../redux/actions/collections.actions"

import SearchDropDown from "../search-dropdown/search-dropdown.component"
import ClickOutside from "../../click-outside/click-outside.component";

import {
  Input,
} from "./search-menu.styles";

const SearchMenu = ({searchField, setSearchField, searchLoaded, setSearchVisibility}) => {
  const dispatch=useDispatch();

  const handleChange = (event) => {
    setSearchField(event.target.value);
    if (searchLoaded)
    dispatch(resetSearchLoaded())
  };

  const [recentSearchesList, setRecentSearchesList]=useState(JSON.parse(localStorage.getItem("recentsearches")))

  const updateRecentSearchesList =(recentSearchesList,searchText)=>{
      let searchesList=[];
    if (!recentSearchesList) {
      searchesList.push(searchText)
    }else {
      searchesList=[...recentSearchesList]
      searchesList.unshift(searchText)
        if (recentSearchesList.length>10){
          searchesList.pop()
        }
      }
    
        const filteredList= searchesList.reduce((accum,item)=> {const found= accum.find(findItem=> { return findItem === item}) 
        return found !==undefined? accum: [...accum,item]},[])     
  return filteredList
  }

  const searchStart= (event) =>{
    if(event.key=== 'Enter') {
      searchField && dispatch(fetchSearchStart(searchField));
      const newList=updateRecentSearchesList(recentSearchesList,searchField)
     localStorage.setItem("recentsearches",JSON.stringify(newList))
    }
}

//   useEffect(() => {
//   const timer = setTimeout(() => {
//     searchField && dispatch(fetchSearchStart(searchField))
//     // const filter = states.filter(state => {
//     //   return state.name.toLowerCase().includes(search.toLowerCase());
//     // });

//     // setFilteredStates(filter);
//   }, 1000);

//   return () => clearTimeout(timer);
// }, [searchField]);

  return (

    <ClickOutside action={() => setSearchVisibility(false)}>
      <Input
        type="text"
        value={searchField}
        placeholder="Search"
        onChange={handleChange}
        onKeyDown={searchStart}
      />
      <SearchDropDown recentSearchesList={recentSearchesList} setRecentSearchesList={setRecentSearchesList} setSearchVisibility={setSearchVisibility}/>
      </ClickOutside>
  );
};

export default SearchMenu;
