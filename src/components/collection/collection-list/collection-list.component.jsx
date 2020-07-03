import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import {
  selectFilteredSection,
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
  selectDescendingOrder,
  selectAscendingOrder,
  selectFilteredSectionUpdated,
} from "../../../redux/selectors/collections.selector";

import ShopItem from "../../shop-item/shop-item.component";

import { CollectionListContainer } from "./collection-list.styles";

const CollectionList = () => {
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);
  const descendingOrder = useSelector(selectDescendingOrder, shallowEqual);
  const ascendingOrder = useSelector(selectAscendingOrder, shallowEqual);

  // const sectionItems = useSelector(
  //   (state) =>
  //     selectFilteredSection(state, filteredColors, filteredSizes, filteredFit),
  //   shallowEqual
  // );

  const filteredSectionUpdated = useSelector(
    (state) =>
      selectFilteredSectionUpdated(
        state,
        filteredColors,
        filteredSizes,
        filteredFit
      ),
    shallowEqual
  );

  let orderedFilteredSectionUpdated = [];

  if (filteredSectionUpdated) {
    orderedFilteredSectionUpdated = [...filteredSectionUpdated];

    if (descendingOrder) {
      orderedFilteredSectionUpdated = filteredSectionUpdated.sort(function (
        i,
        j
      ) {
        return j.LastPrice - i.LastPrice;
      });
    }
  }

  return (
    <CollectionListContainer>
      {console.log("ordered section", orderedFilteredSectionUpdated)}
      {console.log("filteredSectionUpdated", filteredSectionUpdated)}
      {orderedFilteredSectionUpdated
        ? orderedFilteredSectionUpdated.map((item, index) => {
            return (
              <ShopItem
                key={index}
                url={item.Url}
                description={item.Name}
                price={item.Price}
                lastPrice={item.LastPrice}
                sizes={item.Sizes}
                newItem={item.New}
                sale={item.Sale}
                discount={item.Discount}
              />
            );
          })
        : null}
    </CollectionListContainer>
  );
};

export default CollectionList;
