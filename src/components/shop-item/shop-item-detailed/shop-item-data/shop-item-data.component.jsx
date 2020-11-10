import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  Container,
  NavRoute,
  NameContainer,
  ItemName,
  ItemReference,
  DescriptionContainer,
  ItemDescription,
  PriceContainer,
  ItemPrice,
  ItemLastPrice,
  DiscountContainer,
  DiscountBox,
  ItemDiscount,
  ColorsContainer,
  ColorsOptionContainer,
  ColorName,
  SelectSizesContainer,
  SizeGuideContainer,
  CustomButtonContainer,
  DetailsContainer,
  Reviews,
  Separator,
} from "./shop-item-data.styles";

const ShopItemData = ({ item, handleDifferentColor }) => {
  const params = useParams();

  const { collection, section } = params;

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
    <Container>
      <NavRoute>{`${collection}/${section}`}</NavRoute> {/*Navigation Link*/}
      <NameContainer>
        <ItemName>{Name}</ItemName>
        <Wishlist theme="dark" size="large" item={item} />
      </NameContainer>
      <ItemReference>{Reference}</ItemReference>
      <DescriptionContainer>
        <ItemDescription>{Description}</ItemDescription>
        <PriceContainer>
          <ItemPrice sale={Sale} discounted={false}>
            {Price}EUR
          </ItemPrice>
          {Sale && (
            <ItemLastPrice sale={Sale} discounted={true}>
              {LastPrice}EUR
            </ItemLastPrice>
          )}
        </PriceContainer>
      </DescriptionContainer>
      <DiscountContainer>
        {Sale && (
          <DiscountBox>
            <ItemDiscount>{Discount}%</ItemDiscount>
          </DiscountBox>
        )}
      </DiscountContainer>
      <ColorsContainer>
        <ColorsOptionContainer>
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
        </ColorsOptionContainer>
        <ColorName>{Color.name}</ColorName>
      </ColorsContainer>
      <SelectSizesContainer>
        <SelectSize sizes={Sizes} selectedSize={selectedSize} />
      </SelectSizesContainer>
      <SizeGuideContainer>
        <SizeGuide />
      </SizeGuideContainer>
      <CustomButtonContainer>
        <CustomButton
          color="standard"
          onClick={() => {
            if (selectedSize) {
              dispatch(addItem(selectedShopItem, selectedSize));
              selectedCartDropdownHidden && dispatch(toggleCartHidden());
            } else alert("Please, select size first");
          }}
        >
          Add to bag
        </CustomButton>
      </CustomButtonContainer>
      <div>Shipping Information</div>
      <div>Share Item</div>
      <DetailsContainer>
        <ItemDetails
          title="Details"
          text={Details}
          textVisible={detailsVisible}
          setTextVisible={setDetailsVisible}
        />
        <Separator />
        <ItemDetails
          title="Fabric"
          text={Fabric}
          textVisible={fabricVisible}
          setTextVisible={setFabricVisible}
        />
        <Separator />
        <ItemDetails
          title="Care"
          text={Care}
          textVisible={careVisible}
          setTextVisible={setCareVisible}
        />
      </DetailsContainer>
    </Container>
  );
};

export default ShopItemData;
