import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import queryString from "query-string";

import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";
import { selectSearchLoaded } from "../../redux/selectors/collections.selectors";

import ShopMenu from "../../components/shop-menu/shop-menu.component";
import CartMenu from "../../components/cart/cart-menu/cart-menu.component";
import WishlistMenu from "../../components/wishlist/wishlist-menu/wishlist-menu.component";
import CartDropdown from "../../components/cart/cart-dropdown/cart-dropdown.component";
import SearchMenu from "../../components/search/search-menu/search-menu.component";

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
  const [searchField, setSearchField] = useState("");
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser, shallowEqual);
  const selectedCartDropdownHidden = useSelector(
    selectCartHidden,
    shallowEqual
  );
  const searchLoaded = useSelector(selectSearchLoaded, shallowEqual);

  const urlCollection = "featured";

  const labels = {
    sale: "sale",
  };

  const query = {
    labels: `${labels.sale}`,
  };

  const pathName = `/shop/${urlCollection}?${queryString.stringify(query, {
    arrayFormat: "comma",
  })}`;

  useEffect(() => {
    if (searchLoaded) setSearchVisibility(false);
  }, [searchLoaded]);

  return (
    <Container>
      <NavContainer>
        <HeaderContainer>
          <LibLab
            onClick={() => {
              history.push("/");
              setSearchField("");
            }}
          />
          {!searchVisibility && (
            <ShopContainer>
              <LinkContainer onMouseLeave={() => setVisibility(false)}>
                <ShopMenu
                  visibility={visibility}
                  setVisibility={setVisibility}
                />
              </LinkContainer>
              <LinkContainer>
                <ShopLink to="/about">ABOUT</ShopLink>
              </LinkContainer>
              <LinkContainer>
                <ShopLink to={pathName}>SALE</ShopLink>
              </LinkContainer>
              <LinkContainer>
                <ShopLink to="/contact">CONTACT</ShopLink>
              </LinkContainer>
              <LinkContainer>
                <Instagram onClick={() => history.push("/instagram")} />
              </LinkContainer>
            </ShopContainer>
          )}
          {searchVisibility && (
            <SearchMenu
              searchField={searchField}
              setSearchField={setSearchField}
              searchLoaded={searchLoaded}
              setSearchVisibility={setSearchVisibility}
            />
          )}
        </HeaderContainer>
        <UserContainer>
          <UserLinkContainer>
            {searchVisibility ? (
              <Close
                onClick={() => {
                  setSearchField("");
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
