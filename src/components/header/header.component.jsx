import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";

import ShopMenu from "../shop-menu/shop-menu.component";
import CartMenu from "../cart-menu/cart-menu.component";
import WishlistMenu from "../wishlist-menu/wishlist-menu.component";
import CartDropdown from "../cart-menu/cart-dropdown/cart-dropdown.component";

import {
  NavContainer,
  LibLabContainer,
  LibLab,
  ShopContainer,
  LinkContainer,
  ShopLink,
  Instagram,
  UserContainer,
  Search,
  User,
  UserLogged,
  Close,
} from "./header.styles";

const Header = () => {
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser, shallowEqual);
  const selectedCartDropdownHidden = useSelector(
    selectCartHidden,
    shallowEqual
  );
  return (
    <NavContainer>
      <LibLabContainer to="/">
        <LibLab />
      </LibLabContainer>
      <ShopContainer>
        <LinkContainer onMouseLeave={() => setVisibility(false)}>
          <ShopMenu visibility={visibility} setVisibility={setVisibility} />
        </LinkContainer>
        <LinkContainer>
          <ShopLink to="/about">ABOUT</ShopLink>
        </LinkContainer>
        <LinkContainer>
          <ShopLink to="/shop/sale">SALE</ShopLink>
        </LinkContainer>
        <LinkContainer>
          <ShopLink to="/contact">CONTACT</ShopLink>
        </LinkContainer>
        <LinkContainer>
          <Instagram onClick={() => history.push("/instagram")} />
        </LinkContainer>
      </ShopContainer>
      <UserContainer>
        <LinkContainer>
          {searchVisibility ? (
            <Close
              onClick={() => {
                console.log("history", history);
                history.push("/");
                setSearchVisibility(false);
              }}
            />
          ) : (
            <Search
              onClick={() => {
                history.push("/search");
                setSearchVisibility(true);
              }}
            />
          )}
        </LinkContainer>
        <LinkContainer>
          {currentUser ? (
            <UserLogged
              onClick={() => {
                history.push("/user");
              }}
            >
              {currentUser.displayName}
            </UserLogged>
          ) : (
            <User
              onClick={() => {
                history.push("/login");
              }}
            />
          )}
        </LinkContainer>
        <LinkContainer>
          <WishlistMenu />
        </LinkContainer>
        <LinkContainer>
          <CartMenu />
          {!selectedCartDropdownHidden && <CartDropdown />}
        </LinkContainer>
      </UserContainer>
    </NavContainer>
  );
};

export default Header;
