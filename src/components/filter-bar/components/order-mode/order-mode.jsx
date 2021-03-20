import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import {
  selectAscendingOrder,
  selectDescendingOrder,
} from "../../../../redux/selectors/collections.selectors";

import OrderModeDropDown from "./components/order-mode-dropdown";

import { Container, OrderOption, Arrow } from "./order-mode.styles";

const OrderMode = () => {
  const [visibility, setVisibility] = useState(false);
  const ascendingOrder = useSelector(selectAscendingOrder, shallowEqual);
  const descendingOrder = useSelector(selectDescendingOrder, shallowEqual);

  return (
    <Container>
      <OrderOption onClick={() => setVisibility(!visibility)}>
        {!descendingOrder && !ascendingOrder && "Sort by"}
        {!descendingOrder && ascendingOrder && "Price Low to High"}
        {descendingOrder && !ascendingOrder && "Price High to Low"}
      </OrderOption>
      <Arrow onClick={() => setVisibility(!visibility)} />
      {visibility && (
        <OrderModeDropDown
          setVisibility={setVisibility}
          ascendingOrder={ascendingOrder}
          descendingOrder={descendingOrder}
        />
      )}
    </Container>
  );
};

export default OrderMode;
