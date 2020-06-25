import React, { useState } from "react";

import CollectionOrderDropDown from "./collection-order-dropdown/collection-order-dropdown.component";
import {
  CollectionOrderContainer,
  CollectionOrderText,
  CollectionOrderIcon,
} from "./collection-order.styles";

const CollectionOrder = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <CollectionOrderContainer>
      <CollectionOrderText onClick={() => setVisibility(!visibility)}>
        Sort by
      </CollectionOrderText>
      <CollectionOrderIcon onClick={() => setVisibility(!visibility)} />
      {visibility && <CollectionOrderDropDown setVisibility={setVisibility} />}
    </CollectionOrderContainer>
  );
};

export default CollectionOrder;
