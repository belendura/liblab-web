import React from "react";

import CollectionFilterColor from "../../collection-filter-color/collection-filter-color.component";
import CollectionFilterSize from "../../collection-filter-size/collection-filter-size.component";
import CollectionFilterFit from "../../collection-filter-fit/collection-filter-fit.component";

import { CollectionFilterContainer } from "./collection-filter-sidebar.styles";

const CollectionFilterSidebar = () => {
  return (
    <CollectionFilterContainer>
      <CollectionFilterColor />
      <CollectionFilterSize />
      <CollectionFilterFit />
    </CollectionFilterContainer>
  );
};

export default CollectionFilterSidebar;
