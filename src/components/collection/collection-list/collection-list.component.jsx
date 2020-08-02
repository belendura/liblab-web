import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { getOrderedFilteredSection } from "../../../helpers/collections.helpers";

import {
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
  selectDescendingOrdered,
  selectAscendingOrdered,
  selectFilteredSection,
  selectReducedDisplayedItems,
} from "../../../redux/selectors/collections.selector";

import ShopItem from "../../shop-item/shop-item.component";

import { CollectionListContainer } from "./collection-list.styles";

const CollectionList = ({ params }) => {
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);
  const descendingOrdered = useSelector(selectDescendingOrdered, shallowEqual);
  const ascendingOrdered = useSelector(selectAscendingOrdered, shallowEqual);
  const reducedDisplayedItems = useSelector(
    selectReducedDisplayedItems,
    shallowEqual
  );

  const filteredSection = useSelector(
    (state) =>
      selectFilteredSection(state, filteredColors, filteredSizes, filteredFit),
    shallowEqual
  );

  const orderedFilteredSection = getOrderedFilteredSection(
    filteredSection,
    ascendingOrdered,
    descendingOrdered
  );

  return (
    <CollectionListContainer reducedDisplayedItems={reducedDisplayedItems}>
      {orderedFilteredSection
        ? orderedFilteredSection.map((item, index) => {
            return <ShopItem key={index} item={item} params={params} />;
          })
        : null}
    </CollectionListContainer>
  );
};

export default CollectionList;
