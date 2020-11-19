import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { setSectionOrder } from "../../../redux/utils/collections.utils";

import {
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
  selectFilteredSection,
  selectAscendingOrder,
  selectDescendingOrder,
  selectGridView,
} from "../../../redux/selectors/collections.selectors";

import ShopItem from "../../shop-item/shop-item.component";

import { Container } from "./collection-list.styles";

const CollectionList = ({ params }) => {
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
    <Container gridView={gridView}>
      {updatedSection &&
        updatedSection.map((item, index) => {
          const { Color, Reference } = item;
          return (
            <ShopItem
              key={index}
              initialColor={Color.name}
              reference={Reference}
              params={params}
            />
          );
        })}
    </Container>
  );
};

export default CollectionList;
