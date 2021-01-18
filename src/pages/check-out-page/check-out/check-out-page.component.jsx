import React, {useState}from "react";
import { useSelector, shallowEqual } from "react-redux";


import {
  selectCartItems,
  selectCartTotal,
} from "../../../redux/selectors/cart.selectors";
import {
  selectCurrentUser
} from "../../../redux/selectors/user.selectors";

import CartItem from "../../../components/cart/cart-item/cart-item.component";
import ShippingMode from "../../../components/checkout/shipping-mode/shipping-mode.component";
import PromoCode from "../../../components/checkout/promo-code/promo-code.component";
// import ShippingData from "../../../components/checkout/shipping-data/shipping-data.component";
import ClientData from "../../../components/checkout/client-data/client-data.component";

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
  const [client, setClient]=useState(currentUser)
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
      <PromoCode/>
      <ShippingMode/>
      </PaymentExtras>  
      <PaymentExtras>                                                                                
     {currentUser && <ClientData client={client} setClient={setClient}/>}
      </PaymentExtras>
    </Container>
  );
};

export default CheckOutPage;
