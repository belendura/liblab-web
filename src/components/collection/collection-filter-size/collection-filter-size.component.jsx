import React, { useState } from "react";

import {
  CollectionFilterSizeContainer,
  CollectionFilterSizeOption,
} from "./colletion-filter-size.styles";

const CollectionFilterSize = () => {
  const [size, setSize] = useState([]);

  return (
    <CollectionFilterSizeContainer>
      <CollectionFilterSizeOption type="checkBox" id="xs" value={size} />
      <label>xs</label>
      <CollectionFilterSizeOption type="checkBox" id="s" value={size} />
      <label>s</label>
      <CollectionFilterSizeOption type="checkBox" id="m" value={size} />
      <label>m</label>
      <CollectionFilterSizeOption type="checkBox" id="l" value={size} />
      <label>l</label>
      <CollectionFilterSizeOption type="checkBox" id="xl" value={size} />
      <label>xl</label>
    </CollectionFilterSizeContainer>
  );
};

export default CollectionFilterSize;
