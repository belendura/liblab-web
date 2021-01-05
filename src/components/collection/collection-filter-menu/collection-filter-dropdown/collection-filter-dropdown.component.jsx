import React from "react";

import CollectionFilterColor from "../../collection-filter-color/collection-filter-color.component";
import CollectionFilterSize from "../../collection-filter-size/collection-filter-size.component";
import CollectionFilterFit from "../../collection-filter-fit/collection-filter-fit.component";
import { Container } from "./collection-filter-dropdown.styles";

const CollectionFilterDropDown = ({condition}) => {
  return (
    <Container>
      <CollectionFilterColor condition={condition}/>
      <CollectionFilterSize condition={condition}/>
      <CollectionFilterFit condition={condition}/>
    </Container>
  );
};

export default CollectionFilterDropDown;
