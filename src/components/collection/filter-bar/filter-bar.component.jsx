import React from "react";

import SidebarMenu from "../collection/sidebar/sidebar-menu/sidebar-menu.component";
import FilterMenu from "../filter/filter-menu/filter-menu.component";
import OrderMode from "./order-mode/order-mode.component";
import ViewMode from "./view-mode/view-mode.component";

import {
  Container,
  FilterContainer,
  OrderContainer,
} from "./filter-bar.styles";

const FilterBar = ({condition}) => {
  return (
    <Container>
      <FilterContainer>
        <SidebarMenu />
        <FilterMenu condition={condition}/>
      </FilterContainer>
      <OrderContainer>
        <OrderMode/>
        <ViewMode/>
      </OrderContainer>
    </Container>
  );
};

export default FilterBar;
