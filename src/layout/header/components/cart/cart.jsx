import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { toggleCartHidden } from "../../../../redux/actions/cart.actions";

import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../../../redux/selectors/cart.selectors";
import { selectCurrentUser } from "../../../../redux/selectors/user.selectors";

import CartDropDownItem from "./components/cart-dropdown-item";
import CustomButton from "../../../../components/custom-button/custom-button";

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
} from "./cart.styles";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems, shallowEqual);
  const cartTotal = useSelector(selectCartTotal, shallowEqual);
  const cartItemsCount = useSelector(selectCartItemsCount, shallowEqual);
  const user = useSelector(selectCurrentUser, shallowEqual);

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
          cartItems.map((item, index) => (
            <CartDropDownItem key={index} item={item} user={user} />
          ))
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

export default Cart;
