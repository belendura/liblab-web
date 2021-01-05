import React from "react";

import CollectionSidebarMenu from "../collection-sidebar-menu/collection-sidebar-menu.component";
import CollectionFilterMenu from "../collection-filter-menu/collection-filter-menu.component";
import CollectionOrder from "../collection-order/collection-order.component";
import CollectionViewOptions from "../collection-view-options/collection-view.component";

import {
  Container,
  FilterContainer,
  OrderContainer,
} from "./collection-filter.styles";

const CollectionFilter = ({condition}) => {
  return (
    <Container>
      <FilterContainer>
        <CollectionSidebarMenu />
        <CollectionFilterMenu condition={condition}/>
      </FilterContainer>
      <OrderContainer>
        <CollectionOrder />
        <CollectionViewOptions />
      </OrderContainer>
    </Container>
  );
};

export default CollectionFilter;
