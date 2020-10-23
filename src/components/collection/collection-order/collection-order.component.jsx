import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import {
  selectAscendingOrder,
  selectDescendingOrder,
} from "../../../redux/selectors/collections.selectors";

import CollectionOrderDropDown from "./collection-order-dropdown/collection-order-dropdown.component";

import {
  CollectionOrderContainer,
  CollectionOrderText,
  CollectionOrderIcon,
} from "./collection-order.styles";

const CollectionOrder = () => {
  const [visibility, setVisibility] = useState(false);
  const ascendingOrder = useSelector(selectAscendingOrder, shallowEqual);
  const descendingOrder = useSelector(selectDescendingOrder, shallowEqual);

  return (
    <CollectionOrderContainer>
      <CollectionOrderText onClick={() => setVisibility(!visibility)}>
        {!descendingOrder && !ascendingOrder && "Sort by"}
        {!descendingOrder && ascendingOrder && "Price Low to High"}
        {descendingOrder && !ascendingOrder && "Price High to Low"}
      </CollectionOrderText>
      <CollectionOrderIcon onClick={() => setVisibility(!visibility)} />
      {visibility && (
        <CollectionOrderDropDown
          setVisibility={setVisibility}
          ascendingOrder={ascendingOrder}
          descendingOrder={descendingOrder}
        />
      )}
    </CollectionOrderContainer>
  );
};

export default CollectionOrder;
