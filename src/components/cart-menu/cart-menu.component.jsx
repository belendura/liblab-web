import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { toggleCartHidden } from "../../redux/actions/cart.actions";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";

import { CartMenuContainer, Cart, CartMenuCount } from "./cart-menu.styles";

const CartMenu = () => {
  const dispatch = useDispatch();
  const selectedCartItemsCount = useSelector(
    selectCartItemsCount,
    shallowEqual
  );
  return (
    <CartMenuContainer onClick={() => dispatch(toggleCartHidden())}>
      <Cart />
      <CartMenuCount>{selectedCartItemsCount}</CartMenuCount>
    </CartMenuContainer>
  );
};

export default CartMenu;
