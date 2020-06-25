import React from "react";
import { useDispatch } from "react-redux";

import { CartMenuContainer, Cart, CartMenuCount } from "./cart-menu.styles";

const CartMenu = () => {
  const dispatch = useDispatch();
  return (
    <CartMenuContainer onClick={() => dispatch()}>
      <Cart />
      <CartMenuCount>0</CartMenuCount>
    </CartMenuContainer>
  );
};

export default CartMenu;
