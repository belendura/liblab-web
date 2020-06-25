import React from "react";

import {
  CollectionOrderDropDownContainer,
  CollectionOrderText,
} from "./collection-order-dropdown.styles";

const CollectionOrderDropDown = ({ setVisibility }) => {
  return (
    <CollectionOrderDropDownContainer onMouseLeave={() => setVisibility(false)}>
      <CollectionOrderText onClick={() => setVisibility(false)}>
        Price Low to High
      </CollectionOrderText>
      <CollectionOrderText onClick={() => setVisibility(false)}>
        Price High to Low
      </CollectionOrderText>
    </CollectionOrderDropDownContainer>
  );
};

export default CollectionOrderDropDown;
