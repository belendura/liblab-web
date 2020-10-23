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
import SizeGuide from "../../size-guide/size-guide.component";

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
    Url,
    Name,
    LastPrice,
    Discount,
    NewItem,
    Sale,
    Price,
    Sizes,
    Color,
    AvailableUnits,
  } = item;

  const { code, name } = Color;

  return (
    <WishlistItemContainer>
      <WishlistItemPicture
        url={Url[0]}
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
            <SizeGuide />
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
        <WishlistItemColorsBasketContainer>
          <Circle code={code} name={name} color={Color} size={"medium"} />
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
