import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

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
import { selectCurrentUser } from "../../../../redux/selectors/user.selectors";

import Circle from "../../../../components/circle";
import CustomButton from "../../../../components/custom-button";
import Wishlist from "../../../../components/wishlist";
import SizesGuideMenu from "../../../../components/sizes-guide-menu";
import Details from "./components/item-details";
import SelectSize from "../../../../components/select-size";
import ShareMenu from "./components/share-menu";
import SelectSizeDropDown from "./components/select-size-dropdown";

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
} from "./item-data.styles";

const ItemData = ({ collection, section, item, query }) => {
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
    url,
  } = item;

  const { queryColor, queryDetails } = query;

  const [detailsVisible, setDetailsVisible] = useState(false);
  const [fabricVisible, setFabricVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSize());
  }, [dispatch]);

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
          onClick={() => history.goBack()}
        >{`${collection}/${section}`}</NavRoute>
      ) : (
        <NavRoute onClick={() => history.goBack()}>{`${section}`}</NavRoute>
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
                  const newQuery = {
                    queryColor: `${name.replace(" ", "-")}`,
                    queryDetails,
                  };
                  const pathName = `/shop/${collection}/${section.replace(
                    " ",
                    "-"
                  )}/${reference}?${queryString.stringify(newQuery, {
                    arrayFormat: "comma",
                  })}`;
                  console.log("pathName", pathName);
                  history.push(pathName);
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
            colors={queryColor}
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
              dispatch(addItem(item, selectedSize, user));
              selectedCartDropdownHidden && dispatch(toggleCartHidden());
            } else dispatch(openModal("ALERTS", { text }));
          }}
        >
          Add to bag
        </CustomButton>
      </CustomButtonContainer>
      <ShippingContainer onClick={() => dispatch(openModal("SHIPPING_TERMS"))}>
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
        <ShareMenu image={url[0]} />
      </Share>
    </Container>
  );
};

export default ItemData;
