import React from "react";
import { useDispatch } from "react-redux";

// import { addItemToFirestore, removeItemFromFirestore } from "../../../redux/actions/cart.actions";
import {
  Container,
  PictureContainer,
  Picture,
  PriceContainer,
  Price,
  LastPrice,
  Details,
  QuantityContainer,
  QuantitySymbol
} from "./cart-item.styles.js";

const CartItem = ({ item }) => {
  const {
    url,
    reference,
    description,
    price,
    lastPrice,
    sale,
    color,
    quantity,
    selectedSize,
  } = item;
  const dispatch = useDispatch();
  return (
    <Container>{
      console.log("item",item)
    }
      <PictureContainer>
        <Picture src={url} alt="Name" />
      </PictureContainer>
          <Details>{description}</Details>
          <Details>{reference}</Details>
          <Details>{color.name}</Details>
          <Details>{selectedSize}</Details>
          <QuantityContainer>
            <QuantitySymbol onClick={() => console.log("Add Item to FIRESTORE")}>
              &#43;
            </QuantitySymbol>
            <Details>{quantity}</Details>
            <QuantitySymbol onClick={() => console.log("Remove Item from FIRESTORE")}>
              &#45;
            </QuantitySymbol>
          </QuantityContainer>
          <PriceContainer>
          {sale && (
            <Price sale={sale} discounted={false}>
              {price}EUR
            </Price>
          )}
          {sale && (
            <LastPrice sale={sale} discounted={true}>
              {lastPrice}EUR
            </LastPrice>
          )}
          {!sale && (
            <LastPrice sale={sale} discounted={false}>
              {lastPrice}EUR
            </LastPrice>
          )}
</PriceContainer> 
    </Container>
  );
};

export default CartItem;
