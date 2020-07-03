import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import {
  selectAscendingOrdered,
  selectDescendingOrdered,
} from "../../../redux/selectors/collections.selector";

import CollectionOrderDropDown from "./collection-order-dropdown/collection-order-dropdown.component";
import {
  CollectionOrderContainer,
  CollectionOrderText,
  CollectionOrderIcon,
} from "./collection-order.styles";

const CollectionOrder = () => {
  const [visibility, setVisibility] = useState(false);
  const descendingOrdered = useSelector(selectDescendingOrdered, shallowEqual);
  const ascendingOrdered = useSelector(selectAscendingOrdered, shallowEqual);

  return (
    <CollectionOrderContainer>
      <CollectionOrderText onClick={() => setVisibility(!visibility)}>
        {!descendingOrdered && !ascendingOrdered && "Sort by"}
        {!descendingOrdered && ascendingOrdered && "Price Low to High"}
        {descendingOrdered && !ascendingOrdered && "Price High to Low"}
      </CollectionOrderText>
      <CollectionOrderIcon onClick={() => setVisibility(!visibility)} />
      {visibility && (
        <CollectionOrderDropDown
          setVisibility={setVisibility}
          ascendingOrdered={ascendingOrdered}
          descendingOrdered={descendingOrdered}
        />
      )}
    </CollectionOrderContainer>
  );
};

export default CollectionOrder;
