import React from "react";

import CollectionFilterMenu from "../collection-filter-menu/collection-filter-menu.component";
import CollectionOrder from "../collection-order/collection-order.component";
import CollectionViewOptions from "../collection-view-options/collection-view.component";

import { CollectionFilterContainer } from "./collection-filter.styles";

const CollectionFilter = () => {
  return (
    <CollectionFilterContainer>
      <CollectionFilterMenu />
      <CollectionOrder />
      <CollectionViewOptions />
    </CollectionFilterContainer>
  );
};

export default CollectionFilter;
