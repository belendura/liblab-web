import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectSizeItem } from "../../../redux/selectors/wishlist.selectors";

import {
  addFromWishlistToCart,
  removeItemFromWishlist,
  selectSize,
} from "../../../redux/actions/wishlist.actions";

import CustomButton from "../../custom-button/custom-button.component";
import Circle from "../../circle/circle.component";
import SizesGuide from "../../sizes-guide/sizes-guide-menu/sizes-guide-menu.component";

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
  WishlistItemColorsBasketContainer,
  WishlistItemBasketContainer,
  WishlistItemBasket,
} from "./wishlist-item.styles";

const WishlistItem = ({ item }) => {
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const selectedSize = useSelector(selectSizeItem, shallowEqual);
  const {
    url,
    name,
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
    <WishlistItemContainer>
      <WishlistItemPicture
        url={url[0]}
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        {sale && (
          <WishlistItemNew sale={sale} new={newItem}>
            <WishlistItemNewText>{discount}%</WishlistItemNewText>
          </WishlistItemNew>
        )}
        {newItem && (
          <WishlistItemNew sale={sale} new={newItem}>
            <WishlistItemNewText>NEW</WishlistItemNewText>
          </WishlistItemNew>
        )}
        {visibility && (
          <WishlistItemSizesContainer>
            <WishlistItemSizesTitle>
              {availableUnits ? "Select size" : "Sold OUT"}
            </WishlistItemSizesTitle>
            <WishlistItemSizesItemContainer>
              {sizes.map((item, index) => {
                const { units, size } = item;
                return (
                  <WishlistItemSizes
                    key={index}
                    units={units}
                    onClick={() => dispatch(selectSize(size))}
                  >
                    {size}
                  </WishlistItemSizes>
                );
              })}
            </WishlistItemSizesItemContainer>
            <SizesGuide />
          </WishlistItemSizesContainer>
        )}
      </WishlistItemPicture>
      <WishlistItemFooter>
        <WishlistItemFooterDetails>
          <WishlistItemDescription>{name}</WishlistItemDescription>
        </WishlistItemFooterDetails>
        <WishlistItemPriceContainer>
          {
            <WishlistItemPrice sale={sale} discounted={false}>
              {price}EUR
            </WishlistItemPrice>
          }
          {sale && (
            <WishlistItemPrice sale={sale} discounted={true}>
              {lastPrice}EUR
            </WishlistItemPrice>
          )}
        </WishlistItemPriceContainer>
        <WishlistItemColorsBasketContainer>
          <Circle
            code={color.code}
            name={color.name}
            color={color}
            size={"medium"}
          />
          <WishlistItemBasketContainer>
            <WishlistItemBasket
              onClick={() => dispatch(removeItemFromWishlist(item))}
            />
          </WishlistItemBasketContainer>
        </WishlistItemColorsBasketContainer>
      </WishlistItemFooter>
      <CustomButton
        onClick={() => {
          !selectedSize && setVisibility(true);
          selectedSize && setVisibility(false);
          selectedSize && dispatch(addFromWishlistToCart(item, selectedSize));
        }}
      >
        ADD TO CART
      </CustomButton>
    </WishlistItemContainer>
  );
};

export default WishlistItem;
