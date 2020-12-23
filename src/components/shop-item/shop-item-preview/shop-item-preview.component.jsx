import React from "react";
import { useHistory } from "react-router-dom";

import Wishlist from "../../wishlist/wishlist.component";

import {
  Container,
  PictureContainer,
  Picture,
  WishlistContainer,
  UpperInfoContainer,
  UpperInfo,
  BottomInfoContainer,
  Organic,
  Recycled,
  BottomInfo,
  Footer,
  FooterDetails,
  Details,
  Price,
  PriceContainer,
  NewItem,
} from "./shop-item-preview.styles";

const ShopItemPreview = ({ item }) => {
  const history = useHistory();

  const {
    collection,
    section,
    url,
    description,
    reference,
    color,
    price,
    discount,
    sale,
    lastPrice,
    newItem,
    recycled,
    organic,
  } = item;

  return (
    <Container>
      <PictureContainer>
        <Picture
          src={url[0]}
          onClick={() =>
            history.push(
              `/shop/${collection}/${section}/${description}&${reference}/${color.name}`
            )            
          }
        />
        {sale && (
          <UpperInfoContainer sale={sale} new={newItem}>
            <UpperInfo>{discount}%</UpperInfo>
          </UpperInfoContainer>
        )}
        <WishlistContainer>
          <Wishlist theme="dark" size="small" item={item} />
        </WishlistContainer>
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
      <Footer>
        <NewItem newItem={newItem}>NEW</NewItem>
        <FooterDetails>
          <Details>{description}</Details>
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
        </FooterDetails>
      </Footer>
    </Container>
  );
};

export default ShopItemPreview;
