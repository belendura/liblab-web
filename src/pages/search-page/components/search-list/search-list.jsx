import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { setShopItemsOrder } from "../../../../redux/utils/collections.utils";

import {
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
  selectFilteredShopItems,
  selectAscendingOrder,
  selectDescendingOrder,
  selectInPairsView,
  selectSearchLoaded,
  selectSearchParams,
} from "../../../../redux/selectors/collections.selectors";

import CollectionItem from "../../../../components/collection-item";

import { Container, SearchListContainer, Text } from "./search-list.styles.js";

const SearchList = () => {
  // const searchSection=useSelector(selectSection,shallowEqual);
  const searchParams = useSelector(selectSearchParams, shallowEqual);
  const searchLoaded = useSelector(selectSearchLoaded, shallowEqual);

  const [updatedShopItems, setUpdatedShopItems] = useState(null);
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);

  const ascendingOrder = useSelector(selectAscendingOrder, shallowEqual);
  const descendingOrder = useSelector(selectDescendingOrder, shallowEqual);
  const inPairsView = useSelector(selectInPairsView, shallowEqual);

  const filteredShopItems = useSelector(
    (state) =>
      selectFilteredShopItems(
        state,
        filteredColors,
        filteredSizes,
        filteredFit
      ),
    shallowEqual
  );

  useEffect(() => {
    setUpdatedShopItems(
      () =>
        filteredShopItems &&
        setShopItemsOrder(filteredShopItems, ascendingOrder, descendingOrder)
    );
  }, [filteredShopItems, ascendingOrder, descendingOrder]);

  return (
    <Container>
      {/* {searchLoaded && <Title>SEARCH RESULTS FOR <span style={{fontWeight:"bold"}}>"{searchParams.toUpperCase()}"</span></Title>} */}
      {(!updatedShopItems || updatedShopItems.length === 0) && searchLoaded ? (
        <Text>Not results found</Text>
      ) : (
        <SearchListContainer inPairsView={inPairsView}>
          {updatedShopItems &&
            searchLoaded &&
            updatedShopItems
              .filter((item) => {
                const searchParamsArray = searchParams.split(" ");
                return searchParamsArray.reduce((accum, searchParamsItem) => {
                  const searchParamsRE = new RegExp(
                    `\\b${searchParamsItem}\\b`,
                    "gi"
                  );
                  if (item["search"].search(searchParamsRE) !== -1) {
                    accum = true;
                  } else {
                    accum = false;
                  }
                  return accum;
                }, 0);
              })
              .map((item) => {
                const { color, reference, id, collection, section } = item;
                const params = { collection, section };
                return (
                  <CollectionItem
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
  );
};

export default SearchList;
