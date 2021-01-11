import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { toggleCartHidden } from "../../../redux/actions/cart.actions";

import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../../redux/selectors/cart.selectors";

import CartDropDownItem from "../cart-dropdown-item/cart-dropdown-item.component";
import CustomButton from "../../custom-button/custom-button.component";

import {
  Container,
  ItemsContainer,
  Empty,
  Header,
  Title,
  Count,
  SumContainer,
  Sum,
  ButtonContainer,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems, shallowEqual);
  const cartTotal = useSelector(selectCartTotal, shallowEqual);
  const cartItemsCount = useSelector(selectCartItemsCount, shallowEqual);

  return (
    <Container>
      {cartItems && cartItems.length ? (
        <Header>
          <Title>CART</Title>
          <Count>({cartItemsCount})</Count>
        </Header>
      ) : null}
      <ItemsContainer>
        {cartItems && cartItems.length ? (
          cartItems.map((item, index) => <CartDropDownItem key={index} item={item} />)
        ) : (
          <Empty>Your cart is Empty</Empty>
        )} 
      </ItemsContainer>
      {cartItems && cartItems.length ? (
        <SumContainer>
          <Sum>Total:</Sum>
          <Sum>{cartTotal} EUR</Sum>
        </SumContainer>
      ) : null}
      {cartItems && cartItems.length ? (
        <ButtonContainer>
          <CustomButton
            color="standard"
            onClick={() => {
              history.push("/checkout/login");
              dispatch(toggleCartHidden());
            }}
          >
            CHECKOUT
          </CustomButton>
        </ButtonContainer>
      ) : null}
    </Container>
  );
};

export default CartDropDown;
