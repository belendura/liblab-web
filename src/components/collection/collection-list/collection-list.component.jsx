import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { setShopItemsOrder } from "../../../redux/utils/collections.utils";

import {
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
  selectFilteredShopItems,
  selectAscendingOrder,
  selectDescendingOrder,
  selectInPairsView,
} from "../../../redux/selectors/collections.selectors";

import ShopItem from "../../shop-item/shop-item.component";

import { Container } from "./collection-list.styles";

const CollectionList = ({ params, labels }) => {
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
    <Container inPairsView={inPairsView}>
      {updatedShopItems &&
        updatedShopItems
          .filter((item) => {
            return labels === undefined ? item : item[labels] === true;
          })
          .map((item) => {
            const { color, reference, id } = item;
            return (
              <ShopItem
                key={id}
                initialColor={color.name}
                reference={reference}
                labels={labels}
              />
            );
          })}
    </Container>
  );
};

export default CollectionList;
