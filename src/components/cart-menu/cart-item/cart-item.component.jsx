import React from "react";
import { useDispatch } from "react-redux";

import { addItemFromDropupOrCart, removeItem } from "../../../redux/actions/cart.actions";

import {
  Container,
  PictureContainer,
  Picture,
  DescriptionContainer,
  Header,
  Name,
  Price,
  LastPrice,
  DetailsContainer,
  Details,
  QuantityContainer,
  QuantitySymbol,
  Basket,
} from "./cart-item.styles.js";

const CartItem = ({ item }) => {
  const {
    url,
    name,
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
    <Container>
      <PictureContainer>
        <Picture src={url} alt="Name" />
      </PictureContainer>
      <DescriptionContainer>
        <Header>
          <Name>{name}</Name>
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
        </Header>
        {sale && (
          <Price sale={sale} discounted={false}>
            {price}EUR
          </Price>
        )}
        <DetailsContainer>
          <Details>{description} </Details>
          <Details>Color: {color.name}</Details>
          <Details>Size: {selectedSize}</Details>
          <QuantityContainer>
            <Details>Quant: </Details>
            <QuantitySymbol onClick={() => dispatch(addItemFromDropupOrCart(item, item.selectedSize))}>
              &#43;
            </QuantitySymbol>
            <Details>{quantity}</Details>
            <QuantitySymbol onClick={() => dispatch(removeItem(item))}>
              &#45;
            </QuantitySymbol>
          </QuantityContainer>
          <Basket onClick={() => dispatch(removeItem(item))} />
        </DetailsContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default CartItem;
