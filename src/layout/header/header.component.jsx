import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";

import ShopMenu from "../../components/shop-menu/shop-menu.component";
import CartMenu from "../../components/cart-menu/cart-menu.component";
import WishlistMenu from "../../components/wishlist-menu/wishlist-menu.component";
import CartDropdown from "../../components/cart-menu/cart-dropdown/cart-dropdown.component";

import {
  Container,
  HeaderContainer,
  NavContainer,
  LibLab,
  ShopContainer,
  LinkContainer,
  ShopLink,
  Instagram,
  UserContainer,
  UserLinkContainer,
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
    <Container>
      <NavContainer>
        <HeaderContainer>
          <LibLab onClick={() => history.push("/")} />
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
        </HeaderContainer>
        <UserContainer>
          <UserLinkContainer>
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
          </UserLinkContainer>
          <UserLinkContainer>
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
          </UserLinkContainer>
          <UserLinkContainer>
            <WishlistMenu />
          </UserLinkContainer>
          <UserLinkContainer>
            <CartMenu />
            {!selectedCartDropdownHidden && <CartDropdown />}
          </UserLinkContainer>
        </UserContainer>
      </NavContainer>
    </Container>
  );
};

export default Header;
