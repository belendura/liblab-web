import React from "react";

import CollectionFilterColor from "../../collection-filter-color/collection-filter-color.component";
import CollectionFilterSize from "../../collection-filter-size/collection-filter-size.component";
import CollectionFilterFit from "../../collection-filter-fit/collection-filter-fit.component";
import { Container } from "./collection-filter-dropdown.styles";

const CollectionFilterDropDown = () => {
  return (
    <Container>
      <CollectionFilterColor />
      <CollectionFilterSize />
      <CollectionFilterFit />
    </Container>
  );
};

export default CollectionFilterDropDown;
