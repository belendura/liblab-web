import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getAvailableUnits } from "../../helpers/collections.helpers";
import Circle from "../circle/circle.component";

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
  ShopItemArrowLeft,
  ShopItemArrowRight,
  ShopItemColorsContainer,
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
  availableColors,
}) => {
  const history = useHistory();
  const [visibility, setVisibility] = useState(false);
  const [displayedView, setDisplayedView] = useState(0);

  useEffect(() => {
    const availableUnits = getAvailableUnits(sizes);
  }, [sizes]);

  const displayedViewForward = (event) => {
    displayedView < url.length - 1
      ? setDisplayedView(displayedView + 1)
      : setDisplayedView(0);
  };

  const displayedViewBackward = (event) => {
    displayedView > 0
      ? setDisplayedView(displayedView - 1)
      : setDisplayedView(url.length - 1);
  };

  return (
    <ShopItemContainer
      //onClick={() => history.push(`/shop/${description}`)}
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      {console.log("availableColors", availableColors)}
      <ShopItemArrowLeft onClick={displayedViewBackward} />

      <ShopItemArrowRight onClick={displayedViewForward} />
      <ShopItemPicture
        onClick={() => history.push(`/shop/${description}`)}
        url={url[displayedView]}
      >
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
        <ShopItemColorsContainer>
          {availableColors.map((item, index) => (
            <Circle color={item} key={index} />
          ))}
        </ShopItemColorsContainer>
      </ShopItemFooter>
    </ShopItemContainer>
  );
};

export default ShopItem;
