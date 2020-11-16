import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  addItem,
  clearSize,
  toggleCartHidden,
} from "../../../../redux/actions/cart.actions";
import { selectShopItem } from "../../../../redux/actions/collections.actions";
import { openModal } from "../../../../redux/actions/modal.actions";

import {
  selectCartHidden,
  selectSizeItem,
} from "../../../../redux/selectors/cart.selectors";
import { selectSelectedShopItem } from "../../../../redux/selectors/collections.selectors";

import Circle from "../../../circle/circle.component";
import CustomButton from "../../../custom-button/custom-button.component";
import Wishlist from "../../../wishlist/wishlist.component";
import SizesGuideMenu from "../../../sizes-guide/sizes-guide-menu/sizes-guide-menu.component";
import ItemDetails from "../item-details/item-details.component";
import SelectSize from "../../../select-size/select-size.component";
import ShareMenu from "../../../share/share-menu/share-menu.component";

import {
  Container,
  NavRoute,
  NameContainer,
  ItemName,
  ItemReference,
  ReviewsContainer,
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
  SizesGuideContainer,
  CustomButtonContainer,
  ShippingContainer,
  DetailsContainer,
  Separator,
  Share,
} from "./shop-item-data.styles";

const ShopItemData = ({ collection, section, item, handleDifferentColor }) => {
  const {
    Reference,
    Description,
    Name,
    Price,
    Sizes,
    Sale,
    Discount,
    LastPrice,
    Color,
    AvailableColors,
    Details,
    Fabric,
    Care,
  } = item;

  const [detailsVisible, setDetailsVisible] = useState(false);
  const [fabricVisible, setFabricVisible] = useState(false);
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
      <ReviewsContainer>Reviews</ReviewsContainer>
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
      <SizesGuideContainer>
        <SizesGuideMenu section={section} />
      </SizesGuideContainer>
      <CustomButtonContainer>
        <CustomButton
          color="standard"
          onClick={() => {
            const text = "Please select size!";
            if (selectedSize) {
              dispatch(addItem(selectedShopItem, selectedSize));
              selectedCartDropdownHidden && dispatch(toggleCartHidden());
            } else dispatch(openModal("ALERTS", { text }));
          }}
        >
          Add to bag
        </CustomButton>
      </CustomButtonContainer>
      <ShippingContainer onClick={() => dispatch(openModal("SHIPPING_INFO"))}>
        Deliveries & Returns
      </ShippingContainer>
      <DetailsContainer>
        <ItemDetails
          title="Details"
          text={Details}
          textVisible={detailsVisible}
          setTextVisible={setDetailsVisible}
        />
        <Separator />
        <ItemDetails
          title="Fabric & Care"
          text={Fabric}
          textVisible={fabricVisible}
          setTextVisible={setFabricVisible}
        />
      </DetailsContainer>
      <Share>
        <ShareMenu />
      </Share>
    </Container>
  );
};

export default ShopItemData;
