import React from "react";
import { useDispatch } from "react-redux";

import {
  setAscendingOrder,
  setDescendingOrder,
  resetOrder,
} from "../../../../../../redux/actions/collections.actions";

import { Container, OrderOption } from "./order-mode-dropdown.styles";

const OrderModeDropDown = ({
  setVisibility,
  ascendingOrder,
  descendingOrder,
}) => {
  const dispatch = useDispatch();

  return (
    <Container onMouseLeave={() => setVisibility(false)}>
      {(ascendingOrder || descendingOrder) && (
        <OrderOption
          onClick={() => {
            setVisibility(false);
            dispatch(resetOrder());
          }}
        >
          Sort By
        </OrderOption>
      )}
      {!ascendingOrder && (
        <OrderOption
          onClick={() => {
            setVisibility(false);
            dispatch(setAscendingOrder());
          }}
        >
          Price Low to High
        </OrderOption>
      )}
      {!descendingOrder && (
        <OrderOption
          onClick={() => {
            setVisibility(false);
            dispatch(setDescendingOrder());
          }}
        >
          Price High to Low
        </OrderOption>
      )}
    </Container>
  );
};

export default OrderModeDropDown;
