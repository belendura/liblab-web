import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { toggleCartHidden } from "../../redux/actions/cart.actions";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";

import { Container, Cart, Count } from "./cart-menu.styles";

const CartMenu = () => {
  const dispatch = useDispatch();
  const selectedCartItemsCount = useSelector(
    selectCartItemsCount,
    shallowEqual
  );
  return (
    <Container onClick={() => dispatch(toggleCartHidden())}>
      <Cart />
      <Count>{selectedCartItemsCount}</Count>
    </Container>
  );
};

export default CartMenu;
