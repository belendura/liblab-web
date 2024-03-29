import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { selectWishlistItem } from "../../../../../../redux/selectors/wishlist.selectors";
import { selectCartHidden } from "../../../../../../redux/selectors/cart.selectors";
import { selectCurrentUser } from "../../../../../../redux/selectors/user.selectors";

import { removeItemFromWishlist } from "../../../../../../redux/actions/wishlist.actions";
import {
  addItem,
  displayCart,
} from "../../../../../../redux/actions/cart.actions";
import { openModal } from "../../../../../../redux/actions/modal.actions";

import CustomButton from "../../../../../../components/custom-button";
import Circle from "../../../../../../components/circle";
import SizesDropUp from "../../../../../../components/sizes-dropup";

import {
  Container,
  PictureContainer,
  Picture,
  UpperInfoContainer,
  UpperInfo,
  Footer,
  FooterUpper,
  Name,
  Description,
  FooterBottom,
  Price,
  ColorsContainer,
  BasketContainer,
  Basket,
  ButtonContainer,
  NewItem,
} from "./wishlist-card.styles";

const WishlistCard = ({ item }) => {
  const [visibility, setVisibility] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const wishlistItem = useSelector((state) =>
    selectWishlistItem(state, item, shallowEqual)
  );

  const cartHidden = useSelector(selectCartHidden, shallowEqual);
  const user = useSelector(selectCurrentUser, shallowEqual);

  const {
    collection,
    section,
    reference,
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

  const query = {
    queryDetails: `${description.replace(" ", "-")}`,
    queryColor: `${color.name.replace(" ", "-")}`,
  };

  const pathName = `/shop/${collection}/${section.replace(
    " ",
    "-"
  )}/${reference}?${queryString.stringify(query, {
    arrayFormat: "comma",
  })}`;

  return (
    <Container
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      <PictureContainer>
        <Picture src={url[0]} onClick={() => history.push(pathName)} />
        {sale && (
          <UpperInfoContainer sale={sale} new={newItem}>
            <UpperInfo>{discount}%</UpperInfo>
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
      </PictureContainer>
      <Footer>
        <NewItem newItem={newItem}>NEW</NewItem>

        <FooterUpper>
          <Name>{name}</Name>
          <BasketContainer>
            <Basket
              onClick={() => dispatch(removeItemFromWishlist(item, user))}
            />
          </BasketContainer>
        </FooterUpper>
        <FooterBottom>
          <Description>{description}</Description>
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
        </FooterBottom>
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
                dispatch(addItem(item, wishlistItem.selectedSize, user));
                cartHidden && dispatch(displayCart());
              } else if (availableUnits > 0) {
                dispatch(
                  openModal("WISHLIST_SELECT_SIZE", {
                    text,
                    item,
                    user,
                  })
                );
              } else {
                const text = "Item is currently not available";
                dispatch(
                  openModal("ALERTS", {
                    text,
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

export default WishlistCard;
