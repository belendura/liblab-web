import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  addItem,
  clearSize,
  toggleCartHidden,
} from "../../../../redux/actions/cart.actions";

import { openModal } from "../../../../redux/actions/modal.actions";

import {
  selectCartHidden,
  selectSizeItem,
} from "../../../../redux/selectors/cart.selectors";
import {
  selectCurrentUser,
} from "../../../../redux/selectors/user.selectors";

import Circle from "../../../circle/circle.component";
import CustomButton from "../../../custom-button/custom-button.component";
import Wishlist from "../../../wishlist/wishlist.component";
import SizesGuideMenu from "../../../sizes-guide/sizes-guide-menu/sizes-guide-menu.component";
import Details from "../item-details/item-details.component";
import SelectSize from "../../../select-size/select-size.component";
import ShareMenu from "../../../share/share-menu/share-menu.component";
import SelectSizeDropDown from "../../../select-size/select-size-dropdown/select-size-dropdown.component";


import {
  Container,
  NavRoute,
  NameContainer,
  Name,
  Reference,
  ReviewsContainer,
  DescriptionContainer,
  Description,
  PriceContainer,
  Price,
  LastPrice,
  DiscountContainer,
  DiscountBox,
  Discount,
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

const ShopItemData = ({ collection, section, item }) => {
  const [selectSizeVisible, setSelectSizeVisible] = useState(false);
  const history = useHistory();
  const {
    reference,
    description,
    name,
    price,
    sizes,
    sale,
    discount,
    lastPrice,
    color,
    availableColors,
    details,
    fabric,
    care,
  } = item;

  const [detailsVisible, setDetailsVisible] = useState(false);
  const [fabricVisible, setFabricVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSize());
  }, []);

  const selectedCartDropdownHidden = useSelector(
    selectCartHidden,
    shallowEqual
  );

   const selectedSize = useSelector(selectSizeItem, shallowEqual);
  const user = useSelector(selectCurrentUser, shallowEqual);
  return (
    <Container>
      {collection ? (
        <NavRoute
          onClick={() => history.push(`/shop/${collection}/${section}`)}
        >{`${collection}/${section}`}</NavRoute>
      ) : (
        <NavRoute
          onClick={() => history.push(`/shop/${section}`)}
        >{`${section}`}</NavRoute>
      )}
      <NameContainer>
        <Name>{name}</Name>
        <Wishlist theme="dark" size="large" item={item} />
      </NameContainer>
      <Reference>{reference}</Reference>
      <ReviewsContainer>reviews</ReviewsContainer>
      <DescriptionContainer>
        <Description>{description}</Description>
        <PriceContainer>
          <Price sale={sale} discounted={false}>
            {price}EUR
          </Price>
          {sale && (
            <LastPrice sale={sale} discounted={true}>
              {lastPrice}EUR
            </LastPrice>
          )}
        </PriceContainer>
      </DescriptionContainer>
      <DiscountContainer>
        {sale && (
          <DiscountBox>
            <Discount>{discount}%</Discount>
          </DiscountBox>
        )}
      </DiscountContainer>
      <ColorsContainer>
        <ColorsOptionContainer>
          {availableColors.map((item, index) => {
            const { code, name } = item;
            return (
              <div
                key={index}
                onClick={() => {
                  collection?
                  history.push(
                    `/shop/${collection}/${section}/${description}&${reference}/${name}`
                  ):
                  history.push(
                    `/shop/${section}/${description}&${reference}/${name}`
                  )
                }}
              >
                <Circle
                  key={index}
                  code={code}
                  name={name}
                  color={color}
                  size={"medium"}
                />
              </div>
            );
          })}
        </ColorsOptionContainer>
        <ColorName>{color.name}</ColorName>
      </ColorsContainer>
      <SelectSizesContainer>
        <SelectSize
          sizes={sizes}
          selectedSize={selectedSize}
          selectSizeVisible={selectSizeVisible}
          setSelectSizeVisible={setSelectSizeVisible}
        />
        {selectSizeVisible && (
          <SelectSizeDropDown
            sizes={sizes}
            setSelectSizeVisible={setSelectSizeVisible}
          />
        )}
      </SelectSizesContainer>
      <SizesGuideContainer>
        <SizesGuideMenu collection={collection} section={item.section} />
      </SizesGuideContainer>
      <CustomButtonContainer>
        <CustomButton
          color="standard"
          onClick={() => {
            const text = "Please select size!";
            if (selectedSize) {
              dispatch(addItem(item, selectedSize,user));
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
        <Details
          title="Details"
          text={details}
          textVisible={detailsVisible}
          setTextVisible={setDetailsVisible}
        />
        <Separator />
        <Details
          title="Fabric & Care"
          text={fabric}
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
