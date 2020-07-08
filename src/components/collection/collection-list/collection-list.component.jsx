import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { getOrderedFilteredSectionUpdated } from "../../../helpers/collections.helpers";

import {
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
  selectDescendingOrdered,
  selectAscendingOrdered,
  selectFilteredSectionUpdated,
  selectReducedDisplayedItems,
} from "../../../redux/selectors/collections.selector";

import ShopItem from "../../shop-item/shop-item.component";

import { CollectionListContainer } from "./collection-list.styles";

const CollectionList = () => {
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);
  const descendingOrdered = useSelector(selectDescendingOrdered, shallowEqual);
  const ascendingOrdered = useSelector(selectAscendingOrdered, shallowEqual);
  const reducedDisplayedItems = useSelector(
    selectReducedDisplayedItems,
    shallowEqual
  );

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

  const orderedFilteredSectionUpdated = getOrderedFilteredSectionUpdated(
    filteredSectionUpdated,
    ascendingOrdered,
    descendingOrdered
  );

  return (
    <CollectionListContainer reducedDisplayedItems={reducedDisplayedItems}>
      {orderedFilteredSectionUpdated
        ? orderedFilteredSectionUpdated.map((item, index) => {
            return <ShopItem key={index} item={item} />;
          })
        : null}
    </CollectionListContainer>
  );
};

export default CollectionList;
