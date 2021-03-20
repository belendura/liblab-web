import React from "react";

import SidebarMenu from "./components/sidebar-menu";
import FilterMenu from "./components/filter-menu";
import OrderMode from "./components/order-mode";
import ViewMode from "./components/view-mode";

import {
  Container,
  FilterContainer,
  OrderContainer,
} from "./filter-bar.styles";

const FilterBar = ({ condition }) => {
  return (
    <Container>
      <FilterContainer>
        <SidebarMenu />
        <FilterMenu condition={condition} />
      </FilterContainer>
      <OrderContainer>
        <OrderMode />
        <ViewMode />
      </OrderContainer>
    </Container>
  );
};

export default FilterBar;
