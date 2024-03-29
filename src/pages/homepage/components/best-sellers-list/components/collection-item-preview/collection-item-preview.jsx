import React from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import Wishlist from "../../../../../../components/wishlist";

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
} from "./collection-item-preview.styles";

const CollectionItemPreview = ({ item }) => {
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

  const query = {
    queryDetails: `${description.replace(" ", "-")}`,
    queryColor: `${color.name.replace(" ", "-")}`,
  };

  const pathName = `/shop/${collection}/${section.replace(
    " ",
    "-"
  )}/${reference}?${queryString.stringify(query, {
    arrayFormat: "comma",
  })}`;

  return (
    <Container>
      <PictureContainer>
        <Picture src={url[0]} onClick={() => history.push(pathName)} />
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

export default CollectionItemPreview;
