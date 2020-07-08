import React from "react";
import { useDispatch } from "react-redux";

import {
  ascendingOrder,
  descendingOrder,
  resetOrder,
} from "../../../../redux/actions/collections.actions";

import {
  CollectionOrderDropDownContainer,
  CollectionOrderText,
} from "./collection-order-dropdown.styles";

const CollectionOrderDropDown = ({
  setVisibility,
  ascendingOrdered,
  descendingOrdered,
}) => {
  const dispatch = useDispatch();

  return (
    <CollectionOrderDropDownContainer onMouseLeave={() => setVisibility(false)}>
      {(ascendingOrdered || descendingOrdered) && (
        <CollectionOrderText
          onClick={() => {
            setVisibility(false);
            dispatch(resetOrder());
          }}
        >
          Sort By
        </CollectionOrderText>
      )}
      {!ascendingOrdered && (
        <CollectionOrderText
          onClick={() => {
            setVisibility(false);
            dispatch(ascendingOrder());
          }}
        >
          Price Low to High
        </CollectionOrderText>
      )}
      {!descendingOrdered && (
        <CollectionOrderText
          onClick={() => {
            setVisibility(false);
            dispatch(descendingOrder());
          }}
        >
          Price High to Low
        </CollectionOrderText>
      )}
    </CollectionOrderDropDownContainer>
  );
};

export default CollectionOrderDropDown;
