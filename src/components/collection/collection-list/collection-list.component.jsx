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

const CollectionList = ({ condition, params }) => {
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
      {/* {!updatedSection && <span>No Items found</span>} */}
      {updatedSection &&
        updatedSection
          .filter((item, index) => {
            return condition === null ? item : item[condition] === true;
          })
          .map((item, index) => {
            const { color, reference, id } = item;
            return (
              <ShopItem
                key={id}
                initialColor={color.name}
                reference={reference}
                params={params}
              />
            );
          })}
    </Container>
  );
};

export default CollectionList;
