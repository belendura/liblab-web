import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { addItem, removeItem } from "../../redux/actions/cart.actions";
import {
  Container,
  PictureContainer,
  Picture,
  PriceContainer,
  Price,
  LastPrice,
  Details,
  QuantityContainer,
  QuantitySymbol,
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
  const user = useSelector(selectCurrentUser, shallowEqual);
  return (
    <Container>
      <PictureContainer>
        <Picture src={url} alt="Name" />
      </PictureContainer>
      <Details>{description}</Details>
      <Details>{reference}</Details>
      <Details>{color.name}</Details>
      <Details>{selectedSize}</Details>
      <QuantityContainer>
        <QuantitySymbol
          onClick={() => dispatch(addItem(item, selectedSize, user))}
        >
          &#43;
        </QuantitySymbol>
        <Details>{quantity}</Details>
        <QuantitySymbol onClick={() => dispatch(removeItem(item, user))}>
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
