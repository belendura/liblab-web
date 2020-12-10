import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectItemByColor } from "../../redux/selectors/collections.selectors";

import Circle from "../circle/circle.component";
import Wishlist from "../wishlist/wishlist.component";
import SizesDropUp from "../sizes-dropup/sizes-dropup.component";

import {
  Container,
  PictureContainer,
  Picture,
  UpperInfoContainer,
  UpperInfo,
  ArrowLeft,
  ArrowRight,
  Footer,
  FooterDetails,
  Description,
  PriceContainer,
  Price,
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
    url,
    color,
    description,
    price,
    lastPrice,
    sizes,
    newItem,
    sale,
    discount,
    availableColors,
    availableUnits,
  } = currentItem;

  const displayedViewForward = (event) => {
    displayedView < url.length - 1
      ? setDisplayedView(displayedView + 1)
      : setDisplayedView(0);
  };

  const displayedViewBackward = (event) => {
    displayedView > 0
      ? setDisplayedView(displayedView - 1)
      : setDisplayedView(url.length - 1);
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
                `/shop/${collection}/${section}/${description}&${reference}/${color.name}`
              );
            }}
            src={url[displayedView]}
          />
          {sale && (
            <UpperInfoContainer sale={sale} new={newItem}>
              <UpperInfo>{discount}%</UpperInfo>
            </UpperInfoContainer>
          )}
          {newItem && (
            <UpperInfoContainer sale={sale} new={newItem}>
              <UpperInfo>NEW</UpperInfo>
            </UpperInfoContainer>
          )}

          {visibility && (
            <SizesDropUp
              sizes={sizes}
              availableUnits={availableUnits}
              currentItem={currentItem}
            />
          )}
        </PictureContainer>
      )}
      {currentItem && (
        <Footer>
          <FooterDetails>
            <Description>{description}</Description>

            <Wishlist theme="dark" size="small" item={currentItem} />
          </FooterDetails>
          <PriceContainer>
            <Price sale={sale} discounted={false}>
              {price}EUR
            </Price>

            {sale && (
              <Price sale={sale} discounted={true}>
                {lastPrice}EUR
              </Price>
            )}
          </PriceContainer>
          <ColorsContainer>
            {availableColors.map((item, index) => {
              const { code, name } = item;
              return (
                <div key={index} onClick={() => setCurrentColor(name)}>
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
          </ColorsContainer>
        </Footer>
      )}
    </Container>
  );
};

export default ShopItem;
