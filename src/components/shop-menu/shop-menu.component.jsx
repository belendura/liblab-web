import React, { Fragment } from "react";

import ShopDropDown from "./shop-dropdown/shop-dropdown.component";

import { Container, ShopLink } from "./shop-menu.styles";

const ShopMenu = ({ visibility, setVisibility }) => {
  return (
    <Fragment>
      <ShopLink
        onMouseEnter={() => setVisibility(true)}
        to="/shop/women/scrub tops"
      >
        SHOP
      </ShopLink>
      {visibility && <ShopDropDown />}
    </Fragment>
  );
};

export default ShopMenu;
