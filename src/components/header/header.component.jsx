import React from "react";

import { ReactComponent as UserLogo } from "../../assets/user-logo.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import SearchIcon from "../search-icon/search-icon.component";

import {
  HeaderContainer,
  LibLabIcon,
  HeaderLogoContainer,
  HeaderShopContainer,
  HeaderShopLink,
  HeaderInstagramLink,
  InstagramIcon,
  HeaderUserContainer,
  HeaderUserLink,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer to="/">
        <LibLabIcon />
      </HeaderLogoContainer>
      <HeaderShopContainer>
        <HeaderShopLink to="/shop">SHOP</HeaderShopLink>
        <HeaderShopLink to="/about">ABOUT</HeaderShopLink>
        <HeaderShopLink to="/shope/sale">SALE</HeaderShopLink>
        <HeaderShopLink to="/contact">CONTACT</HeaderShopLink>
        <HeaderInstagramLink to="/instagram">
          <InstagramIcon />
        </HeaderInstagramLink>
      </HeaderShopContainer>
      <HeaderUserContainer>
        <SearchIcon />
        <HeaderUserLink to="/instagram">
          <UserLogo style={{ height: "40px" }} />
        </HeaderUserLink>
        <CartIcon />
      </HeaderUserContainer>
    </HeaderContainer>
  );
};

export default Header;
