import React from "react";

import CollectionFilterSize from "../collection-filter-size/collection-filter-size.component";

import { CollectionFilterListContainer } from "./collection-filter-list.styles";

const CollectionFilterList = () => {
  return (
    <CollectionFilterListContainer>
      <div>COLLECTION FILTER LIST</div>
      <CollectionFilterSize />
    </CollectionFilterListContainer>
  );
};

export default CollectionFilterList;
