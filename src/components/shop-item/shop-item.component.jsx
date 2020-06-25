import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
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
  sizes,
  newItem,
  sale,
  discount,
}) => {
  const history = useHistory();
  const [visibility, setVisibility] = useState(false);
  const [salePrice, setSalePrice] = useState(0);

  useEffect(() => {
    sale && setSalePrice(Math.round(price - (discount * price) / 100));
  }, []);

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
              {salePrice}EUR
            </ShopItemPrice>
          )}
        </ShopItemPriceContainer>
      </ShopItemFooter>
    </ShopItemContainer>
  );
};

export default ShopItem;
