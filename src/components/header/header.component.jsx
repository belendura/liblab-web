import React, { useState } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

import ShopIcon from "../shop-icon/shop-icon.component";
import CartIcon from "../cart-icon/cart-icon.component";
import FavIcon from "../fav-icon/fav-icon.component";

import {
  HeaderContainer,
  LibLabIcon,
  HeaderLogoContainer,
  HeaderShopContainer,
  HeaderShopLink,
  HeaderInstagramLink,
  InstagramIcon,
  HeaderUserContainer,
  HeaderSearchContainer,
  HeaderSearchLink,
  HeaderSearch,
  HeaderUserLink,
  HeaderUser,
  CloseIcon,
} from "./header.styles";

const Header = () => {
  const [searchVisibility, setSearchVisibility] = useState(false);
  const history = useHistory();

  return (
    <HeaderContainer>
      <HeaderLogoContainer to="/">
        <LibLabIcon />
      </HeaderLogoContainer>
      <HeaderShopContainer>
        <ShopIcon />
        <HeaderShopLink to="/about">ABOUT</HeaderShopLink>
        <HeaderShopLink to="/shop/sale">SALE</HeaderShopLink>
        <HeaderShopLink to="/contact">CONTACT</HeaderShopLink>
        <HeaderInstagramLink to="/instagram">
          <InstagramIcon />
        </HeaderInstagramLink>
      </HeaderShopContainer>
      <HeaderUserContainer>
        <HeaderSearchContainer>
          {searchVisibility ? (
            <CloseIcon
              onClick={() => {
                console.log("history", history);
                history.push("/");

                setSearchVisibility(false);
              }}
            />
          ) : (
            <HeaderSearch
              onClick={() => {
                history.push("/search");
                setSearchVisibility(true);
              }}
            />
          )}
        </HeaderSearchContainer>
        <HeaderUserLink to="/login">
          <HeaderUser />
        </HeaderUserLink>
        <FavIcon />
        <CartIcon />
      </HeaderUserContainer>
    </HeaderContainer>
  );
};

export default Header;
