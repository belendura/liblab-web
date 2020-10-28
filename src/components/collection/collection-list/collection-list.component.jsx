import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import {
  setSectionOrder,
  setSectionFilter,
} from "../../../redux/utils/collections.utils";

import {
  selectSection,
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
  selectFilteredSection,
  selectAscendingOrder,
  selectDescendingOrder,
  selectGridView,
} from "../../../redux/selectors/collections.selectors";

import ShopItem from "../../shop-item/shop-item.component";

import { CollectionListContainer } from "./collection-list.styles";

const CollectionList = ({ params }) => {
  const [updatedSection, setUpdatedSection] = useState(null);
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);

  const ascendingOrder = useSelector(selectAscendingOrder, shallowEqual);
  const descendingOrder = useSelector(selectDescendingOrder, shallowEqual);
  const gridView = useSelector(selectGridView, shallowEqual);
  const section = useSelector(selectSection, shallowEqual);

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
    <CollectionListContainer gridView={gridView}>
      {console.log("updatedSection", updatedSection)}
      {updatedSection
        ? updatedSection.map((item, index) => {
            return <ShopItem key={index} item={item} params={params} />;
          })
        : null}
    </CollectionListContainer>
  );
};

export default CollectionList;
