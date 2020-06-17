import React from "react";

import CollectionFilterSize from "../collection-filter-size/collection-filter-size.component";
import CollectionFilterColor from "../collection-filter-color/collection-filter-color.component";

import { CollectionFilterListContainer } from "./collection-filter-list.styles";

const CollectionFilterList = () => {
  return (
    <CollectionFilterListContainer>
      <CollectionFilterColor />
      <CollectionFilterSize />
    </CollectionFilterListContainer>
  );
};

export default CollectionFilterList;
