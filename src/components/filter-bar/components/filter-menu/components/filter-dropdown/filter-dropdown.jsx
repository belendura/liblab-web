import React from "react";

import FilterColor from "./components/filter-color";
import FilterSize from "./components/filter-size";
import FilterFit from "./components/filter-fit";

import { Container } from "./filter-dropdown.styles";

const FilterDropDown = ({ condition }) => {
  return (
    <Container>
      <FilterColor condition={condition} />
      <FilterSize condition={condition} />
      <FilterFit condition={condition} />
    </Container>
  );
};

export default FilterDropDown;
