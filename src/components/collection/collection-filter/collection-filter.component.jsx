import React from "react";

import { useSelector, shallowEqual } from "react-redux";

import CollectionFilterColor from "../collection-filter-color/collection-filter-color.component";
import CollectionFilterSize from "../collection-filter-size/collection-filter-size.component";
import CollectionOrder from "../collection-order/collection-order.component";
import CollectionFilterFit from "../collection-filter-fit/collection-filter-fit.component";

import { CollectionFilterContainer } from "./collection-filter.styles";

const CollectionFilter = () => {
  return (
    <CollectionFilterContainer>
      <CollectionFilterColor />
      <CollectionFilterSize />
      <CollectionFilterFit />
      <CollectionOrder />
    </CollectionFilterContainer>
  );
};

export default CollectionFilter;
