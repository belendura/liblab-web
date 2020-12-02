import React from "react";
import { useHistory } from "react-router-dom";

import Wishlist from "../../wishlist/wishlist.component";

import {
  Container,
  Picture,
  Footer,
  FooterDetails,
  Details,
  Price,
  WishlistContainer,
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
    lastPrice,
    newItem,
  } = item;

  return (
    <Container>
      <Picture
        url={url[0]}
        onClick={() =>
          history.push(
            `/shop/${collection}/${section}/${description}&${reference}/${color.name}`
          )
        }
      />
      <Footer>
        <NewItem newItem={newItem}>NEW</NewItem>
        <WishlistContainer>
          <Wishlist theme="dark" size="small" item={item} />
        </WishlistContainer>
        <FooterDetails>
          <Details>{description}</Details>
          <Price>{lastPrice}EUR</Price>
        </FooterDetails>
      </Footer>
    </Container>
  );
};

export default ShopItemPreview;
