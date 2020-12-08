import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectWishlistItem } from "../../../redux/selectors/wishlist.selectors";
import { selectCartHidden } from "../../../redux/selectors/cart.selectors";

import { removeItemFromWishlist } from "../../../redux/actions/wishlist.actions";
import {
  addItemFromWishlist,
  displayCart,
} from "../../../redux/actions/cart.actions";
import { openModal } from "../../../redux/actions/modal.actions";

import CustomButton from "../../custom-button/custom-button.component";
import Circle from "../../circle/circle.component";
import SizesDropUp from "../../sizes-dropup/sizes-dropup.component";

import {
  Container,
  PictureContainer,
  Picture,
  UpperInfoContainer,
  UpperInfo,
  Footer,
  FooterDetails,
  Name,
  Description,
  PriceContainer,
  Price,
  ColorsContainer,
  BasketContainer,
  Basket,
  ButtonContainer,
} from "./wishlist-item.styles";

const WishlistItem = ({ item }) => {
  const [visibility, setVisibility] = useState(false);

  const dispatch = useDispatch();

  const wishlistItem = useSelector((state) =>
    selectWishlistItem(state, item, shallowEqual)
  );

  const cartHidden = useSelector(selectCartHidden, shallowEqual);

  const {
    url,
    name,
    description,
    lastPrice,
    discount,
    newItem,
    sale,
    price,
    sizes,
    color,
    availableUnits,
  } = item;

  return (
    <Container>
      <PictureContainer>
        <Picture
          url={url[0]}
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          {sale && (
            <UpperInfoContainer sale={sale} new={newItem}>
              <UpperInfo>{discount}%</UpperInfo>
            </UpperInfoContainer>
          )}
          {newItem && (
            <UpperInfoContainer sale={sale} new={newItem}>
              <UpperInfo>NEW</UpperInfo>
            </UpperInfoContainer>
          )}
          {visibility && (
            <SizesDropUp
              sizes={sizes}
              availableUnits={availableUnits}
              currentItem={item}
              wishlist={true}
              selectedSize={wishlistItem.selectedSize}
            />
          )}
        </Picture>
      </PictureContainer>
      <Footer>
        <Name>{name}</Name>
        <FooterDetails>
          <Description>{description}</Description>
          <BasketContainer>
            <Basket onClick={() => dispatch(removeItemFromWishlist(item))} />
          </BasketContainer>
        </FooterDetails>
        <PriceContainer>
          {
            <Price sale={sale} discounted={false}>
              {price}EUR
            </Price>
          }
          {sale && (
            <Price sale={sale} discounted={true}>
              {lastPrice}EUR
            </Price>
          )}
        </PriceContainer>
        <ColorsContainer>
          <Circle
            code={color.code}
            name={color.name}
            color={color}
            size={"medium"}
          />
        </ColorsContainer>
        <ButtonContainer>
          <CustomButton
            color="standard"
            onClick={() => {
              const text = "Please select size!";
              !wishlistItem.selectedSize && setVisibility(true);
              if (wishlistItem.selectedSize) {
                dispatch(addItemFromWishlist(item));
                cartHidden && dispatch(displayCart());
              } else {
                dispatch(
                  openModal("WISHLIST_SELECT_SIZE", {
                    text,
                    item,
                  })
                );
              }
            }}
          >
            ADD TO CART
          </CustomButton>
        </ButtonContainer>
      </Footer>
    </Container>
  );
};

export default WishlistItem;
