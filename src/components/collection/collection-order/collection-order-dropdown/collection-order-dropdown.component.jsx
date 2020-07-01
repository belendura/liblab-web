import React from "react";
import { useDispatch } from "react-redux";

import {
  ascendingOrder,
  descendingOrder,
} from "../../../../redux/actions/collections.actions";

import {
  CollectionOrderDropDownContainer,
  CollectionOrderText,
} from "./collection-order-dropdown.styles";

const CollectionOrderDropDown = ({ setVisibility }) => {
  const dispatch = useDispatch();

  // const ascendingOrder = () => {
  //   filteredCollection.sort((i, j) => {
  //     i;
  //     return i - j;
  //   });
  // };
  return (
    <CollectionOrderDropDownContainer onMouseLeave={() => setVisibility(false)}>
      <CollectionOrderText
        onClick={() => {
          setVisibility(false);
          dispatch(ascendingOrder());
        }}
      >
        Price Low to High
      </CollectionOrderText>
      <CollectionOrderText onClick={() => setVisibility(false)}>
        Price High to Low
      </CollectionOrderText>
    </CollectionOrderDropDownContainer>
  );
};

export default CollectionOrderDropDown;
