import React, { useState } from "react";

import CollectionFilterDropDown from "./collection-filter-dropdown/collection-filter-dropdown.component";

import { Container, FilterMenu, Title } from "./collection-filter-menu.styles";

const CollectionFilterMenu = ({condition}) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <Container>
        <FilterMenu onClick={() => setVisibility(!visibility)} />
        <Title onClick={() => setVisibility(!visibility)}>Filter</Title>
        {visibility && <CollectionFilterDropDown condition={condition} />}
      </Container>
    </div>
  );
};

export default CollectionFilterMenu;
