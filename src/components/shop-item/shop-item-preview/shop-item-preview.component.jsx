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
  const {
    Collection,
    Section,
    Url,
    Description,
    Reference,
    Color,
    LastPrice,
    New,
  } = item;
  const history = useHistory();

  return (
    <Container>
      <Picture
        url={Url[0]}
        onClick={() =>
          history.push(
            `/shop/${Collection}/${Section}/${Description}&${Reference}/${Color.name}`
          )
        }
      />
      <Footer>
        <NewItem newItem={New}>NEW</NewItem>
        <WishlistContainer>
          <Wishlist theme="dark" size="small" item={item} />
        </WishlistContainer>
        <FooterDetails>
          <Details>{Description}</Details>
          <Price>{LastPrice}EUR</Price>
        </FooterDetails>
      </Footer>
    </Container>
  );
};

export default ShopItemPreview;
