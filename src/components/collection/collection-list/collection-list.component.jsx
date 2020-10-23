import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { setSectionOrder } from "../../../redux/utils/collections.utils";

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

import { selectWishlistItems } from "../../../redux/selectors/wishlist.selectors";

import ShopItem from "../../shop-item/shop-item.component";

import { CollectionListContainer } from "./collection-list.styles";

const CollectionList = ({ params }) => {
  // const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  // const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);
  // const filteredFit = useSelector(selectFilteredFit, shallowEqual);

  const gridView = useSelector(selectGridView, shallowEqual);

  const section = useSelector(selectSection, shallowEqual);
  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);

  // const filteredSection = useSelector(
  //   (state) =>
  //     selectFilteredSection(state, filteredColors, filteredSizes, filteredFit),
  //   shallowEqual
  // );

  // const updatedWishlistSection = useSelector(
  //   (state) => selectUpdatedWishlistSection(state, wishlistItems),
  //   shallowEqual
  // );

  const ascendingOrder = useSelector(selectAscendingOrder, shallowEqual);
  const descendingOrder = useSelector(selectDescendingOrder, shallowEqual);

  const updatedSection = setSectionOrder(
    section,
    ascendingOrder,
    descendingOrder
  );

  return (
    <CollectionListContainer gridView={gridView}>
      {/* {console.log("section in ", section)} */}
      {updatedSection
        ? updatedSection.map((item, index) => {
            return <ShopItem key={index} item={item} params={params} />;
          })
        : null}
    </CollectionListContainer>
  );
};

export default CollectionList;
