import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectItemByColor } from "../../redux/selectors/collections.selectors";

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

const ShopItem = ({ initialColor, reference, params }) => {
  const history = useHistory();
  const { collection, section } = params;

  const [visibility, setVisibility] = useState(false);
  const [displayedView, setDisplayedView] = useState(0);
  const [currentColor, setCurrentColor] = useState(initialColor);

  const selectedItem = useSelector((state) =>
    selectItemByColor(state, reference, currentColor, shallowEqual)
  );

  const [currentItem, setCurrentItem] = useState(selectedItem);

  useEffect(() => {
    if (selectedItem !== undefined) setCurrentItem(selectedItem);
  }, [selectedItem, currentColor]);

  const {
    Url,
    Color,
    Reference,
    Description,
    Price,
    LastPrice,
    Sizes,
    New,
    Sale,
    Discount,
    AvailableColors,
    AvailableUnits,
  } = currentItem;

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

  return (
    <Container
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      {currentItem && (
        <PictureContainer>
          {visibility && <ArrowLeft onClick={displayedViewBackward} />}
          {visibility && <ArrowRight onClick={displayedViewForward} />}
          <Picture
            onClick={() => {
              history.push(
                `/shop/${collection}/${section}/${Description}&${Reference}/${Color.name}`
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
      )}
      {currentItem && (
        <Footer>
          <FooterDetails>
            <ItemDescription>{Description}</ItemDescription>

            <Wishlist theme="dark" size="small" item={currentItem} />
          </FooterDetails>
          <PriceContainer>
            <ItemPrice sale={Sale} discounted={false}>
              {Price}EUR
            </ItemPrice>

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
                <div key={index} onClick={() => setCurrentColor(name)}>
                  <Circle
                    key={index}
                    code={code}
                    name={name}
                    color={Color}
                    size={"medium"}
                  />
                </div>
              );
            })}
          </ColorsContainer>
        </Footer>
      )}
    </Container>
  );
};

export default ShopItem;
