import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  addItem,
  clearSize,
  toggleCartHidden,
} from "../../../../redux/actions/cart.actions";
import { selectShopItem } from "../../../../redux/actions/collections.actions";

import {
  selectCartHidden,
  selectSizeItem,
} from "../../../../redux/selectors/cart.selectors";
import { selectSelectedShopItem } from "../../../../redux/selectors/collections.selectors";

import Circle from "../../../circle/circle.component";
import CustomButton from "../../../custom-button/custom-button.component";
import Wishlist from "../../../wishlist/wishlist.component";
import SizeGuide from "../../../size-guide/size-guide.component";
import ItemDetails from "../item-details/item-details.component";
import SelectSize from "../../../select-size/select-size.component";

import {
  ShopItemDataContainer,
  ShopItemDataName,
  ShopItemDataReference,
  ShopItemDescriptionContainer,
  ShopItemDataDescription,
  ShopItemDataPriceContainer,
  ShopItemDataPrice,
  ShopItemDataLastPrice,
  ShopItemDataDiscountContainer,
  ShopItemDataDiscount,
  ShopItemDataColorsContainer,
  ShopItemDataColorsOptionContainer,
  ShopItemDataColorName,
  ShopItemDataSizeGuideContainer,
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

  const [detailsVisible, setDetailsVisible] = useState(false);
  const [fabricVisible, setFabricVisible] = useState(false);
  const [careVisible, setCareVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectShopItem(item));
    dispatch(clearSize());
  }, [Color]);

  const selectedCartDropdownHidden = useSelector(
    selectCartHidden,
    shallowEqual
  );
  const selectedShopItem = useSelector(selectSelectedShopItem, shallowEqual);

  const selectedSize = useSelector(selectSizeItem, shallowEqual);

  return (
    <ShopItemDataContainer>
      <div>Navigation</div>
      <ShopItemDataName>{Name}</ShopItemDataName>
      <ShopItemDataReference>{Reference}</ShopItemDataReference>
      <ShopItemDescriptionContainer>
        <ShopItemDataDescription>{Description}</ShopItemDataDescription>
        <Wishlist theme="dark" size="medium" item={item} />
      </ShopItemDescriptionContainer>
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
      <SelectSize sizes={Sizes} selectedSize={selectedSize} />
      <ShopItemDataSizeGuideContainer>
        <SizeGuide />
      </ShopItemDataSizeGuideContainer>
      <CustomButton
        onClick={() => {
          if (selectedSize) {
            dispatch(addItem(selectedShopItem, selectedSize));
            selectedCartDropdownHidden && dispatch(toggleCartHidden());
          } else alert("Please, select size first");
        }}
      >
        Add to bag
      </CustomButton>
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
