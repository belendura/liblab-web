import React from "react";
import { useDispatch } from "react-redux";

import { removeItem } from "../../../redux/actions/cart.actions";

import {
  Container,
  PictureContainer,
  Picture,
  InfoContainer,
  Header,
  HeaderDetail,
  Price,
  DetailsContainer,
  Details,
  BasketContainer,
  Basket,
  Line,
} from "./cart-item.styles.js";

const CartItem = ({ item }) => {
  const { url, name, lastPrice, color, quantity, selectedSize } = item;
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <PictureContainer>
          <Picture src={url} alt="Name" />
        </PictureContainer>
        <InfoContainer>
          <Header>
            <HeaderDetail>{name}</HeaderDetail>
            <Price>{lastPrice} EUR</Price>
          </Header>
          <DetailsContainer>
            <Details>Color: {color.name}</Details>
            <Details>Size: {selectedSize}</Details>
            <Details>
              Quant:
              {quantity}
            </Details>
          </DetailsContainer>
          <BasketContainer>
            <Basket onClick={() => dispatch(removeItem(item))} />
          </BasketContainer>
        </InfoContainer>
      </Container>
      <Line />
    </div>
  );
};

export default CartItem;
