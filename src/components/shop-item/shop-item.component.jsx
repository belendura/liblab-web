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
  const [salePrices, setSalePrices] = useState([]);

  useEffect(() => {
    if (discount.length > 0 && sale) console.log("discount", discount);
    setSalePrices(
      discount.map((item) => Math.round(price - (item * price) / 100))
    );
  }, [discount]);

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
          <ShopItemPrice sale={sale}>{price}EUR</ShopItemPrice>
          {sale &&
            discount.length > 0 &&
            salePrices.forEach((itemPrice) => (
              <ShopItemPrice sale={sale}>{itemPrice}EUR</ShopItemPrice>
            ))}
        </ShopItemPriceContainer>
      </ShopItemFooter>
    </ShopItemContainer>
  );
};

export default ShopItem;
