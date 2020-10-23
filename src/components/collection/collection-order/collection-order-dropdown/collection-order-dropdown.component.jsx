import React from "react";
import { useDispatch } from "react-redux";

import {
  setAscendingOrder,
  setDescendingOrder,
  resetOrder,
} from "../../../../redux/actions/collections.actions";

import {
  CollectionOrderDropDownContainer,
  CollectionOrderText,
} from "./collection-order-dropdown.styles";

const CollectionOrderDropDown = ({
  setVisibility,
  ascendingOrder,
  descendingOrder,
}) => {
  const dispatch = useDispatch();

  return (
    <CollectionOrderDropDownContainer onMouseLeave={() => setVisibility(false)}>
      {(ascendingOrder || descendingOrder) && (
        <CollectionOrderText
          onClick={() => {
            setVisibility(false);
            dispatch(resetOrder());
          }}
        >
          Sort By
        </CollectionOrderText>
      )}
      {!ascendingOrder && (
        <CollectionOrderText
          onClick={() => {
            setVisibility(false);
            dispatch(setAscendingOrder());
          }}
        >
          Price Low to High
        </CollectionOrderText>
      )}
      {!descendingOrder && (
        <CollectionOrderText
          onClick={() => {
            setVisibility(false);
            dispatch(setDescendingOrder());
          }}
        >
          Price High to Low
        </CollectionOrderText>
      )}
    </CollectionOrderDropDownContainer>
  );
};

export default CollectionOrderDropDown;
