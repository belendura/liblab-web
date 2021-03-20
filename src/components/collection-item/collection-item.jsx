import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

import { selectItemByColor } from "../../redux/selectors/collections.selectors";

import Circle from "../circle";
import Wishlist from "../wishlist";
import SizesDropUp from "../sizes-dropup";

import {
  Container,
  PictureContainer,
  Picture,
  UpperInfoContainer,
  UpperInfo,
  ArrowLeft,
  ArrowRight,
  NewItem,
  BottomInfoContainer,
  Organic,
  Recycled,
  BottomInfo,
  Footer,
  FooterDetails,
  Description,
  PriceContainer,
  Price,
  ColorsContainer,
} from "./collection-item.styles";

const CollectionItem = ({ initialColor, reference }) => {
  const history = useHistory();
  // const location = useLocation();

  // const { pathname, search, state } = location;
  // console.log("patnhame", pathname);
  // console.log("state", state);

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
    collection,
    section,
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
    recycled,
    organic,
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

  const query = {
    // labels: `${fromServerEnumerate[labels]}`,
    details: `${description.replace(" ", "-")}`,
    colors: `${color.name.replace(" ", "-")}`,
  };

  const pathName = `/shop/${collection}/${section.replace(
    " ",
    "-"
  )}/${reference}?${queryString.stringify(query, {
    arrayFormat: "comma",
  })}`;

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
              history.push(pathName);
            }}
            src={url[displayedView]}
          />
          {sale && (
            <UpperInfoContainer sale={sale} new={newItem}>
              <UpperInfo>{discount}%</UpperInfo>
            </UpperInfoContainer>
          )}
          {visibility && (
            <SizesDropUp
              sizes={sizes}
              availableUnits={availableUnits}
              currentItem={currentItem}
            />
          )}
          {recycled && (
            <BottomInfoContainer>
              <Recycled />
              <BottomInfo>Recycled</BottomInfo>
            </BottomInfoContainer>
          )}
          {organic && !recycled && (
            <BottomInfoContainer>
              <Organic />
              <BottomInfo>Organic</BottomInfo>
            </BottomInfoContainer>
          )}
        </PictureContainer>
      )}
      {currentItem && (
        <Footer>
          <NewItem newItem={newItem}>NEW</NewItem>
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

export default CollectionItem;
