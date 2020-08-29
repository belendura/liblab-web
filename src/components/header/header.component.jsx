import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";

import ShopMenu from "../shop-menu/shop-menu.component";
import CartMenu from "../cart-menu/cart-menu.component";
import FavMenu from "../fav-menu/fav-menu.component";
import CartDropdown from "../cart-menu/cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LibLabLogo,
  HeaderLogoContainer,
  HeaderShopContainer,
  HeaderShopLink,
  InstagramMenu,
  HeaderUserContainer,
  HeaderSearchContainer,
  HeaderSearch,
  HeaderUser,
  HeaderUserLogged,
  CloseMenu,
} from "./header.styles";

const Header = () => {
  const [searchVisibility, setSearchVisibility] = useState(false);
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser, shallowEqual);
  const selectedCartDropdownHidden = useSelector(
    selectCartHidden,
    shallowEqual
  );
  return (
    <HeaderContainer>
      <HeaderLogoContainer to="/">
        <LibLabLogo />
      </HeaderLogoContainer>
      <HeaderShopContainer>
        <ShopMenu />
        <HeaderShopLink to="/about">ABOUT</HeaderShopLink>
        <HeaderShopLink to="/shop/sale">SALE</HeaderShopLink>
        <HeaderShopLink to="/contact">CONTACT</HeaderShopLink>

        <InstagramMenu onClick={() => history.push("/instagram")} />
      </HeaderShopContainer>
      <HeaderUserContainer>
        <HeaderSearchContainer>
          {searchVisibility ? (
            <CloseMenu
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
        {currentUser ? (
          <HeaderUserLogged
            onClick={() => {
              history.push("/user");
            }}
          >
            {currentUser.displayName}
          </HeaderUserLogged>
        ) : (
          <HeaderUser
            onClick={() => {
              history.push("/login");
            }}
          />
        )}
        <FavMenu />
        <CartMenu />
        {!selectedCartDropdownHidden && <CartDropdown />}
      </HeaderUserContainer>
    </HeaderContainer>
  );
};

export default Header;
