import React, { useState } from "react";

import FilterDropDown from "./components/filter-dropdown";

import { Container, Filter, Title } from "./filter-menu.styles";

const FilterMenu = ({ condition }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <Container>
        <Filter onClick={() => setVisibility(!visibility)} />
        <Title onClick={() => setVisibility(!visibility)}>Filter</Title>
        {visibility && <FilterDropDown condition={condition} />}
      </Container>
    </div>
  );
};

export default FilterMenu;
