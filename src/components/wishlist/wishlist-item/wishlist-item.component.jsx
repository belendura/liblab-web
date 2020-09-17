import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { getAvailableUnits } from "../../../helpers/collections.helpers";
import { addToCart } from "../../../redux/actions/wishlist.actions";

import CustomButton from "../../custom-button/custom-button.component";
import Circle from "../../circle/circle.component";

import {
  WishlistItemContainer,
  WishlistItemPicture,
  WishlistItemFooter,
  WishlistItemFooterDetails,
  WishlistItemDescription,
  WishlistItemPriceContainer,
  WishlistItemPrice,
  WishlistItemNew,
  WishlistItemSizesContainer,
  WishlistItemSizesTitle,
  WishlistItemSizes,
  WishlistItemSizesItemContainer,
  WishlistItemNewText,
  WishlistItemColorsContainer,
} from "./wishlist-item.styles";

const WishlistItem = ({ item }) => {
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const {
    Url,
    Reference,
    Name,
    LastPrice,
    Discount,
    NewItem,
    Sale,
    Price,
    Sizes,
    Color,
    AvailableColors,
    AvailableUnits,
  } = item;

  const { code, name } = Color;

  return (
    <WishlistItemContainer>
      <WishlistItemPicture
        url={Url}
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        {Sale && (
          <WishlistItemNew sale={Sale} new={NewItem}>
            <WishlistItemNewText>{Discount}%</WishlistItemNewText>
          </WishlistItemNew>
        )}
        {NewItem && (
          <WishlistItemNew sale={Sale} new={NewItem}>
            <WishlistItemNewText>NEW</WishlistItemNewText>
          </WishlistItemNew>
        )}
        {visibility && (
          <WishlistItemSizesContainer>
            <WishlistItemSizesTitle>
              {AvailableUnits ? "Select size" : "Sold OUT"}
            </WishlistItemSizesTitle>
            <WishlistItemSizesItemContainer>
              {Sizes.map((item, index) => {
                const { units, size } = item;
                return (
                  <WishlistItemSizes key={index} units={units}>
                    {size}
                  </WishlistItemSizes>
                );
              })}
            </WishlistItemSizesItemContainer>
          </WishlistItemSizesContainer>
        )}
      </WishlistItemPicture>
      <WishlistItemFooter>
        <WishlistItemFooterDetails>
          <WishlistItemDescription>{Name}</WishlistItemDescription>
        </WishlistItemFooterDetails>
        <WishlistItemPriceContainer>
          {
            <WishlistItemPrice sale={Sale} discounted={false}>
              {Price}EUR
            </WishlistItemPrice>
          }
          {Sale && (
            <WishlistItemPrice sale={Sale} discounted={true}>
              {LastPrice}EUR
            </WishlistItemPrice>
          )}
        </WishlistItemPriceContainer>
        <WishlistItemColorsContainer>
          <Circle code={code} name={name} color={Color} size={"medium"} />
        </WishlistItemColorsContainer>
      </WishlistItemFooter>
      <CustomButton
        onClick={() => {
          setVisibility(true);
          dispatch(addToCart(item));
        }}
      >
        ADD TO CART
      </CustomButton>
    </WishlistItemContainer>
  );
};

export default WishlistItem;
