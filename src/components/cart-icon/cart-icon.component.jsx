import React from "react";
import { useDispatch } from "react-redux";

import { CartIconContainer, Cart, CartIconCount } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <CartIconContainer onClick={() => dispatch()}>
      <Cart />
      <CartIconCount>0</CartIconCount>
    </CartIconContainer>
  );
};

export default CartIcon;
