import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";

import ShopIcon from "../shop-icon/shop-icon.component";
import CartIcon from "../cart-icon/cart-icon.component";
import FavIcon from "../fav-icon/fav-icon.component";

import {
  HeaderContainer,
  LibLabIcon,
  HeaderLogoContainer,
  HeaderShopContainer,
  HeaderShopLink,
  InstagramIcon,
  HeaderUserContainer,
  HeaderSearchContainer,
  HeaderSearch,
  HeaderUser,
  HeaderUserLogged,
  CloseIcon,
} from "./header.styles";

const Header = () => {
  const [searchVisibility, setSearchVisibility] = useState(false);
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser, shallowEqual);

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

        <InstagramIcon onClick={() => history.push("/instagram")} />
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
        <FavIcon />
        <CartIcon />
      </HeaderUserContainer>
    </HeaderContainer>
  );
};

export default Header;
