import React from "react";

import CollectionFilterMenu from "../collection-filter-menu/collection-filter-menu.component";
import CollectionOrder from "../collection-order/collection-order.component";
import CollectionViewOptions from "../collection-view-options/collection-view.component";

import {
  CollectionFilterContainer,
  CollectionOrderContainer,
  CollectionFilterMenuContainer,
} from "./collection-filter.styles";

const CollectionFilter = () => {
  return (
    <CollectionFilterContainer>
      <CollectionFilterMenuContainer>
        <CollectionFilterMenu />
      </CollectionFilterMenuContainer>
      <CollectionOrderContainer>
        <CollectionOrder />
        <CollectionViewOptions />
      </CollectionOrderContainer>
    </CollectionFilterContainer>
  );
};

export default CollectionFilter;
