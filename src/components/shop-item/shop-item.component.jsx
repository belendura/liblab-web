import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getAvailableUnits } from "../../redux/utils/collections.utils";

import { selectShopItem } from "../../redux/actions/collections.actions";

import Circle from "../circle/circle.component";
import Wishlist from "../wishlist/wishlist.component";
import SizesDropUp from "./sizes-dropup/sizes-dropup.component";

import {
  Container,
  PictureContainer,
  Picture,
  Footer,
  FooterDetails,
  ItemDescription,
  PriceContainer,
  ItemPrice,
  UpperInfoContainer,
  UpperInfo,
  ArrowLeft,
  ArrowRight,
  ColorsContainer,
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
    New,
    Sale,
    Discount,
    Color,
    AvailableColors,
    AvailableUnits,
  } = item[displayedItem];

  useEffect(() => {
    const checkSoldOut = () => {
      const availableUnits = getAvailableUnits(Sizes);
      return availableUnits;
    };
  }, [Sizes]);

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
    <Container
      //onClick={() => history.push(`/shop/${description}`)}
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      <PictureContainer>
        {visibility && <ArrowLeft onClick={displayedViewBackward} />}
        {visibility && <ArrowRight onClick={displayedViewForward} />}
        <Picture
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
            <UpperInfoContainer sale={Sale} new={New}>
              <UpperInfo>{Discount}%</UpperInfo>
            </UpperInfoContainer>
          )}
          {New && (
            <UpperInfoContainer sale={Sale} new={New}>
              <UpperInfo>NEW</UpperInfo>
            </UpperInfoContainer>
          )}
          {visibility && (
            <SizesDropUp sizes={Sizes} availableUnits={AvailableUnits} />
          )}
        </Picture>
      </PictureContainer>
      <Footer>
        <FooterDetails>
          <ItemDescription>{Description}</ItemDescription>
          <Wishlist theme="dark" size="small" item={item[displayedItem]} />
        </FooterDetails>
        <PriceContainer>
          {
            <ItemPrice sale={Sale} discounted={false}>
              {Price}EUR
            </ItemPrice>
          }
          {Sale && (
            <ItemPrice sale={Sale} discounted={true}>
              {LastPrice}EUR
            </ItemPrice>
          )}
        </PriceContainer>
        <ColorsContainer>
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
        </ColorsContainer>
      </Footer>
    </Container>
  );
};

export default ShopItem;
