import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// import { getAvailableUnits } from "../../helpers/collections.helpers";

import { selectShopItem } from "../../redux/actions/collections.actions";
import { toggleItem } from "../../redux/actions/wishlist.actions";

import Circle from "../circle/circle.component";
import WishlistIcon from "../wishlist/wishlist.component";

import {
  ShopItemContainer,
  ShopItemPicture,
  ShopItemFooter,
  ShopItemFooterDetails,
  ShopItemDescription,
  ShopItemPriceContainer,
  ShopItemPrice,
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

const ShopItem = ({ item, params }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [visibility, setVisibility] = useState(false);
  const [displayedView, setDisplayedView] = useState(0);
  const [displayedItem, setDisplayedItem] = useState(0);
  const { collection, section } = params;

  const {
    Url,
    Reference,
    Description,
    Name,
    Price,
    LastPrice,
    Sizes,
    NewItem,
    Sale,
    Discount,
    Color,
    AvailableColors,
    AvailableUnits,
  } = item[displayedItem];

  // useEffect(() => {
  //   const checkSoldOut = () => {
  //     const availableUnits = getAvailableUnits(Sizes);
  //     return availableUnits;
  //   };
  // }, [Sizes]);

  const displayedViewForward = (event) => {
    displayedView < Url.length - 1
      ? setDisplayedView(displayedView + 1)
      : setDisplayedView(0);
  };

  const displayedViewBackward = (event) => {
    displayedView > 0
      ? setDisplayedView(displayedView - 1)
      : setDisplayedView(Url.length - 1);
  };

  const handleDifferentColor = (event) => {
    const { id } = event.target;
    setDisplayedItem(
      item.findIndex((itemDisplayed) => itemDisplayed["Color"].name === id)
    );
  };

  return (
    <ShopItemContainer
      //onClick={() => history.push(`/shop/${description}`)}
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      <ShopItemArrowLeft onClick={displayedViewBackward} />

      <ShopItemArrowRight onClick={displayedViewForward} />
      <ShopItemPicture
        onClick={() => {
          dispatch(selectShopItem(item[displayedItem]));
          history.push(
            `/shop/${collection}/${section}/${Name}-${Reference}/${Color.name}`
            // `/shop/${collection}/${section}/${Name}-${Reference}.html?color=${Color.name}`
          );
        }}
        url={Url[displayedView]}
      >
        {Sale && (
          <ShopItemNew sale={Sale} new={NewItem}>
            <ShopItemNewText>{Discount}%</ShopItemNewText>
          </ShopItemNew>
        )}
        {NewItem && (
          <ShopItemNew sale={Sale} new={NewItem}>
            <ShopItemNewText>NEW</ShopItemNewText>
          </ShopItemNew>
        )}
        {visibility && (
          <ShopItemSizesContainer>
            <ShopItemSizesTitle>
              {AvailableUnits ? "Add size" : "Sold OUT"}
            </ShopItemSizesTitle>
            <ShopItemSizesItemContainer>
              {Sizes.map((item, index) => {
                const { units, size } = item;
                return (
                  <ShopItemSizes key={index} units={units}>
                    {size}
                  </ShopItemSizes>
                );
              })}
            </ShopItemSizesItemContainer>
          </ShopItemSizesContainer>
        )}
      </ShopItemPicture>
      <ShopItemFooter>
        <ShopItemFooterDetails>
          <ShopItemDescription>{Description}</ShopItemDescription>
          <WishlistIcon theme="dark" size="small" item={item[displayedItem]} />
        </ShopItemFooterDetails>
        <ShopItemPriceContainer>
          {
            <ShopItemPrice sale={Sale} discounted={false}>
              {Price}EUR
            </ShopItemPrice>
          }
          {Sale && (
            <ShopItemPrice sale={Sale} discounted={true}>
              {LastPrice}EUR
            </ShopItemPrice>
          )}
        </ShopItemPriceContainer>
        <ShopItemColorsContainer>
          {AvailableColors.map((item, index) => {
            const { code, name } = item;
            return (
              <Circle
                key={index}
                code={code}
                name={name}
                color={Color}
                size={"medium"}
                handleDifferentColor={handleDifferentColor}
              />
            );
          })}
        </ShopItemColorsContainer>
      </ShopItemFooter>
    </ShopItemContainer>
  );
};

export default ShopItem;
