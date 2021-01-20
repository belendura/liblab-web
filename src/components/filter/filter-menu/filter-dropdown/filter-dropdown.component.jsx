import React from "react";

import FilterColor from "../../filter-color/filter-color.component";
import FilterSize from "../../filter-size/filter-size.component";
import FilterFit from "../../filter-fit/filter-fit.component";
import { Container } from "./filter-dropdown.styles";

const FilterDropDown = ({condition}) => {
  return (
    <Container>
      <FilterColor condition={condition}/>
      <FilterSize condition={condition}/>
      <FilterFit condition={condition}/>
    </Container>
  );
};

export default FilterDropDown;
