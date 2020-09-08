import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { toggleCartHidden } from "../../../redux/actions/cart.actions";

import {
  selectCartItems,
  selectCartTotal,
} from "../../../redux/selectors/cart.selectors";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../../custom-button/custom-button.component";

import {
  CartDropDownContainer,
  CartDropDownEmpty,
  CartItemTotal,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedCartItems = useSelector(selectCartItems, shallowEqual);
  const selectedCartTotal = useSelector(selectCartTotal, shallowEqual);

  return (
    <CartDropDownContainer>
      {selectedCartItems.length ? (
        selectedCartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))
      ) : (
        <CartDropDownEmpty>Your cart is Empty</CartDropDownEmpty>
      )}
      {selectedCartItems.length ? (
        <CartItemTotal>Total: {selectedCartTotal} EUR</CartItemTotal>
      ) : null}
      {selectedCartItems.length ? (
        <CustomButton
          onClick={() => {
            history.push("/checkout/login");
            dispatch(toggleCartHidden());
          }}
        >
          CHECKOUT
        </CustomButton>
      ) : null}
    </CartDropDownContainer>
  );
};

export default CartDropDown;
