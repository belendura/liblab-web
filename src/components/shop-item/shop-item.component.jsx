import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  ShopItemContainer,
  ShopItemPicture,
  ShopItemFooter,
  ShopItemFooterDetails,
  ShopItemDescription,
  ShopItemPriceContainer,
  ShopItemPrice,
  ShopItemFav,
  ShopItemNew,
  ShopItemSizesContainer,
  ShopItemSizesTitle,
  ShopItemSizes,
  ShopItemSizesItemContainer,
  ShopItemNewText,
} from "./shop-item.styles";

const ShopItem = ({
  url,
  description,
  price,
  lastPrice,
  sizes,
  newItem,
  sale,
  discount,
}) => {
  const history = useHistory();
  const [visibility, setVisibility] = useState(false);

  return (
    <ShopItemContainer
      onClick={() => history.push(`/shop/${description}`)}
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      <ShopItemPicture url={url[0]}>
        {sale && (
          <ShopItemNew sale={sale} new={newItem}>
            <ShopItemNewText>{discount}%</ShopItemNewText>
          </ShopItemNew>
        )}
        {newItem && (
          <ShopItemNew sale={sale} new={newItem}>
            <ShopItemNewText>NEW</ShopItemNewText>
          </ShopItemNew>
        )}
        {visibility && (
          <ShopItemSizesContainer>
            <ShopItemSizesTitle>Add size</ShopItemSizesTitle>
            <ShopItemSizesItemContainer>
              {sizes.map((item, index) => (
                <ShopItemSizes key={index} units={item.units}>
                  {item.size}
                </ShopItemSizes>
              ))}
            </ShopItemSizesItemContainer>
          </ShopItemSizesContainer>
        )}
      </ShopItemPicture>
      <ShopItemFooter>
        <ShopItemFooterDetails>
          <ShopItemDescription>{description}</ShopItemDescription>
          <ShopItemFav />
        </ShopItemFooterDetails>
        <ShopItemPriceContainer>
          {!sale && (
            <ShopItemPrice sale={sale} discounted={false}>
              {price}EUR
            </ShopItemPrice>
          )}
          {sale && (
            <ShopItemPrice sale={sale} discounted={false}>
              {price}EUR
            </ShopItemPrice>
          )}
          {sale && (
            <ShopItemPrice sale={sale} discounted={true}>
              {lastPrice}EUR
            </ShopItemPrice>
          )}
        </ShopItemPriceContainer>
      </ShopItemFooter>
    </ShopItemContainer>
  );
};

export default ShopItem;
