import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import {
  selectFilteredSection,
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
} from "../../../redux/selectors/collections.selector";

import ShopItem from "../../shop-item/shop-item.component";

import { CollectionListContainer } from "./collection-list.styles";

const CollectionList = () => {
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);

  const sectionItems = useSelector(
    (state) =>
      selectFilteredSection(state, filteredColors, filteredSizes, filteredFit),
    shallowEqual
  );

  return (
    <CollectionListContainer>
      {sectionItems
        ? sectionItems.map((item, index) => {
          
            return (
              <ShopItem
                key={index}
                url={item.Url}
                description={item.Name}
                price={item.Price}
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
