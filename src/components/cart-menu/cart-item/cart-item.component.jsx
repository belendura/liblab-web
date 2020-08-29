import React from "react";
import { useDispatch } from "react-redux";

import { removeItem } from "../../../redux/actions/cart.actions";

import {
  CartItemContainer,
  CartItemPictureContainer,
  CartItemPicture,
  CartItemInfoContainer,
  CartItemHeader,
  CartItemHeaderDetail,
  CartItemPrice,
  CartItemDetailsContainer,
  CartItemDetail,
  CartItemBasketContainer,
  CartItemBasket,
  LineStyled,
} from "./cart-item.styles.js";

const CartItem = ({ item }) => {
  const { Url, Name, LastPrice, Color, quantity, selectedSize } = item;
  const dispatch = useDispatch();

  return (
    <div>
      <CartItemContainer>
        <CartItemPictureContainer>
          <CartItemPicture src={Url} alt="Name" />
        </CartItemPictureContainer>
        <CartItemInfoContainer>
          <CartItemHeader>
            <CartItemHeaderDetail>{Name}</CartItemHeaderDetail>
            <CartItemPrice>{LastPrice} EUR</CartItemPrice>
          </CartItemHeader>
          <CartItemDetailsContainer>
            <CartItemDetail>Color: {Color.name}</CartItemDetail>
            <CartItemDetail>Size: {selectedSize}</CartItemDetail>
            <CartItemDetail>
              Quant:
              {quantity}
            </CartItemDetail>
          </CartItemDetailsContainer>
          <CartItemBasketContainer>
            <CartItemBasket onClick={() => dispatch(removeItem(item))} />
          </CartItemBasketContainer>
        </CartItemInfoContainer>
      </CartItemContainer>
      <LineStyled />
    </div>
  );
};

export default CartItem;
