import React from "react";

import {
  ShopItemDataContainer,
  Name,
  Reference,
  PriceContainer,
  Price,
  LastPrice,
  Discount,
  ColorsContainer,
  Color,
  ColorName,
  SizesContainer,
  Size,
  HelpSize,
  DescriptionContainer,
  FabricContainer,
  ShippingInformation,
  Reviews,
} from "./shop-item-data.styles";
const ShopItemData = ({ item }) => {
  console.log("item", item);
  const {
    Url,
    Reference,
    Description,
    Name,
    Price,
    Sizes,
    NewItem,
    Sale,
    Discount,
    LastPrice,
    Color,
    AvailableColors,
    AvailableUnits,
  } = item[0];
  return (
    <ShopItemDataContainer>
      <Name>{Name}</Name>
      {/* <Reference>{Reference}</Reference>
      <PriceContainer>
        <Price>{Price}</Price>
        {Sale ? <LastPrice>{LastPrice}</LastPrice> : null}
        {Sale ? <Discount>{Discount}</Discount> : null}
      </PriceContainer>
      <ColorsContainer></ColorsContainer> */}
    </ShopItemDataContainer>
  );
};

export default ShopItemData;
