import React, {useState, useEffect} from "react";
import {useSelector, shallowEqual} from "react-redux"

import { setSectionOrder } from "../../../redux/utils/collections.utils";

import {
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
  selectFilteredSection,
  selectAscendingOrder,
  selectDescendingOrder,
  selectGridView,
  selectSection, 
  selectSearchLoaded, 
  selectSearchParams
} from "../../../redux/selectors/collections.selectors";

import ShopItem from "../../shop-item/shop-item.component"

import { Container, SearchListContainer, Text } from "./search-list.styles.js";

const SearchList = () => {
  // const searchSection=useSelector(selectSection,shallowEqual);
  const searchParams=useSelector(selectSearchParams,shallowEqual);
  const searchLoaded=useSelector(selectSearchLoaded,shallowEqual);

  const [updatedSection, setUpdatedSection] = useState(null);
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);

  const ascendingOrder = useSelector(selectAscendingOrder, shallowEqual);
  const descendingOrder = useSelector(selectDescendingOrder, shallowEqual);
  const gridView = useSelector(selectGridView, shallowEqual);

  const filteredSection = useSelector(
    (state) =>
      selectFilteredSection(state, filteredColors, filteredSizes, filteredFit),
    shallowEqual
  );

  useEffect(() => {
    setUpdatedSection(
      () =>
        filteredSection &&
        setSectionOrder(filteredSection, ascendingOrder, descendingOrder)
    );
  }, [filteredSection, ascendingOrder, descendingOrder]);

  return (
    <Container>
    {/* {searchLoaded && <Title>SEARCH RESULTS FOR <span style={{fontWeight:"bold"}}>"{searchParams.toUpperCase()}"</span></Title>} */}
      {(!updatedSection|| updatedSection.length===0) && searchLoaded ?   <Text>Not results found</Text>:(
        <SearchListContainer  gridView={gridView}>
          {updatedSection &&  searchLoaded &&   
            updatedSection.filter(item => {
          const searchParamsArray=  searchParams.split(" ")
        return searchParamsArray.reduce((accum,searchParamsItem)=>{
            const searchParamsRE= new RegExp(`\\b${searchParamsItem}\\b`, 'gi');
          if (item["search"].search(searchParamsRE) !== -1){
             accum=true}
             else{
              accum=false;
             }
             return accum;
          },0)
        }).map(item => {
            const { color, reference, id, collection, section} = item;
        const params={collection,section};
            return (
              <ShopItem
                key={id}
                initialColor={color.name}
                reference={reference}
                params={params}
              />
            );
          })}
        </SearchListContainer>
      )}
    </Container>
  )
};

export default SearchList;
