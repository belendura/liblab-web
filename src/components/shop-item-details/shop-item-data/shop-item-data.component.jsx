import React, { useState } from "react";

import Circle from "../../circle/circle.component";
import CustomButton from "../../custom-button/custom-button.component";
import FavIcon from "../../fav/fav.component";
import SizeGuide from "../../size-guide/size-guide.component";
import ItemDetails from "../../item-details/item-details.component";

import {
  ShopItemDataContainer,
  ShopItemDataName,
  ShopItemDataReference,
  ShopItemDataPriceContainer,
  ShopItemDataPrice,
  ShopItemDataLastPrice,
  ShopItemDataDiscountContainer,
  ShopItemDataDiscount,
  ShopItemDataColorsContainer,
  ShopItemDataColorsOptionContainer,
  ShopItemDataColorName,
  ShopItemDataSelectSizesContainer,
  ShopItemDataSelectSize,
  ShopItemDataOptionSize,
  ShopItemDataSizeGuideContainer,
  ShopItemDataGuideSize,
  SizeHanger,
  DescriptionContainer,
  FabricContainer,
  ShippingInformation,
  Reviews,
  LineStyled,
} from "./shop-item-data.styles";
const ShopItemData = ({ item, handleDifferentColor }) => {
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
    Details,
    Fabric,
    Care,
  } = item;

  const [sizeGuideVisible, setSizeGuideVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [fabricVisible, setFabricVisible] = useState(false);
  const [careVisible, setCareVisible] = useState(false);
  return (
    <ShopItemDataContainer>
      <ShopItemDataName>{Name}</ShopItemDataName>
      <ShopItemDataReference>{Reference}</ShopItemDataReference>
      <ShopItemDataPriceContainer>
        <ShopItemDataPrice sale={Sale} discounted={false}>
          {Price}EUR
        </ShopItemDataPrice>
        {Sale ? (
          <ShopItemDataLastPrice sale={Sale} discounted={true}>
            {LastPrice}EUR
          </ShopItemDataLastPrice>
        ) : null}
        {Sale ? (
          <ShopItemDataDiscountContainer>
            <ShopItemDataDiscount>{Discount}%</ShopItemDataDiscount>
          </ShopItemDataDiscountContainer>
        ) : null}
      </ShopItemDataPriceContainer>
      <ShopItemDataColorsContainer>
        <ShopItemDataColorsOptionContainer>
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
        </ShopItemDataColorsOptionContainer>
        <ShopItemDataColorName>{Color.name}</ShopItemDataColorName>
      </ShopItemDataColorsContainer>
      <ShopItemDataSelectSizesContainer>
        <ShopItemDataSelectSize name="sizes" id="sizes" required>
          <ShopItemDataOptionSize>Select size</ShopItemDataOptionSize>
          {Sizes.map((item, index) => {
            const { size, units } = item;
            return (
              <ShopItemDataOptionSize key={index} value={size} units={units}>
                {size}
              </ShopItemDataOptionSize>
            );
          })}
        </ShopItemDataSelectSize>
      </ShopItemDataSelectSizesContainer>
      <ShopItemDataSizeGuideContainer>
        <SizeHanger />
        <ShopItemDataGuideSize onClick={() => setSizeGuideVisible(true)}>
          Size Guide
        </ShopItemDataGuideSize>
        {sizeGuideVisible ? (
          <SizeGuide setSizeGuideVisible={setSizeGuideVisible} />
        ) : null}
      </ShopItemDataSizeGuideContainer>
      <ItemDetails
        title="Details"
        text={Details}
        textVisible={detailsVisible}
        setTextVisible={setDetailsVisible}
      />
      <LineStyled />
      <ItemDetails
        title="Fabric"
        text={Fabric}
        textVisible={fabricVisible}
        setTextVisible={setFabricVisible}
      />
      <LineStyled />
      <ItemDetails
        title="Care"
        text={Care}
        textVisible={careVisible}
        setTextVisible={setCareVisible}
      />
    </ShopItemDataContainer>
  );
};

export default ShopItemData;
