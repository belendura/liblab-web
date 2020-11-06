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
  const { Url, Description, LastPrice, New } = item;
  const history = useHistory();

  return (
    <Container>
      <Picture
        url={Url[0]}
        onClick={() => history.push(`/shop/${Description}`)}
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
