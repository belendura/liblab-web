import React from "react";
import { useSelector, shallowEqual } from "react-redux";


import {
  selectCartItems,
  selectCartTotal,
} from "../../../redux/selectors/cart.selectors";

import CartItem from "../../../components/cart/cart-item/cart-item.component";

import {
  Container,
  CartContainer,
  Header,
  Title,
  ItemsContainer,
  HeaderTitle,
  Empty,
} from "./check-out-page.styles";

const CheckOutPage = () => {

  const cartItems = useSelector(selectCartItems, shallowEqual);
  const cartTotal = useSelector(selectCartTotal, shallowEqual);

  return (
    <Container>
      <Title>YOUR CART</Title>
      <CartContainer>
        <Header>
         <HeaderTitle>Article</HeaderTitle>
         <HeaderTitle>Description</HeaderTitle>
         <HeaderTitle>Reference</HeaderTitle>
         <HeaderTitle>Color</HeaderTitle>
         <HeaderTitle>Size</HeaderTitle>
         <HeaderTitle>Quantity</HeaderTitle>
         <HeaderTitle>Price</HeaderTitle>
        </Header>
      <ItemsContainer>
        {cartItems && cartItems.length ? (
          cartItems.map((item, index) => <CartItem key={index} item={item} />)
        ) : (
          <Empty>Your cart is Empty</Empty>
        )}  
      </ItemsContainer>
      </CartContainer>
    </Container>
  );
};

export default CheckOutPage;
