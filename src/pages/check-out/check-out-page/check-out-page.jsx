import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import {
  selectCartItems,
  selectCartTotal,
} from "../../../redux/selectors/cart.selectors";
import { selectCurrentUser } from "../../../redux/selectors/user.selectors";

import CartItem from "../../../components/cart-item";
import ShippingMode from "./components/shipping-mode";
import PromoCode from "./components/promo-code";
// import ShippingData from "../../../components/checkout/shipping-data/shipping-data.component";
import ClientData from "./components/client-data";

import {
  Container,
  CartContainer,
  Header,
  Title,
  ItemsContainer,
  HeaderTitle,
  Empty,
  Total,
  PaymentExtras,
} from "./check-out-page.styles";

const CheckOutPage = () => {
  const cartItems = useSelector(selectCartItems, shallowEqual);
  const cartTotal = useSelector(selectCartTotal, shallowEqual);
  const currentUser = useSelector(selectCurrentUser, shallowEqual);
  const [client, setClient] = useState(currentUser);
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
      <Total>SubTotal: {cartTotal}EUR</Total>
      <PaymentExtras>
        <PromoCode />
        <ShippingMode />
      </PaymentExtras>
      <PaymentExtras>
        {currentUser && <ClientData client={client} setClient={setClient} />}
      </PaymentExtras>
    </Container>
  );
};

export default CheckOutPage;
