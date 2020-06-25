import React, { useState } from "react";

import CollectionFilterSidebar from "./collection-filter-sidebar/collection-filter-sidebar.component";

import {
  CollectionFilterMenuContainer,
  CollectionFilterMenuLogo,
  CollectionFilterMenuText,
} from "./collection-filter-menu.styles";

const CollectionFilterMenu = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <CollectionFilterMenuContainer
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        <CollectionFilterMenuLogo />
        <CollectionFilterMenuText>Filter</CollectionFilterMenuText>
        {visibility && <CollectionFilterSidebar />}
      </CollectionFilterMenuContainer>
    </div>
  );
};

export default CollectionFilterMenu;
