import React, { Fragment } from "react";
import queryString from "query-string";

import ShopMenuDropDown from "./components/shop-menu-dropdown";

import { ShopLink } from "./shop-menu.styles";

const ShopMenu = ({ visibility, setVisibility }) => {
  const urlCollection = "women";

  const urlSection = "scrub-tops";

  const query = {};

  const pathName = `/shop/${urlCollection}/${urlSection}?${queryString.stringify(
    query,
    {
      arrayFormat: "comma",
    }
  )}`;

  return (
    <Fragment>
      <ShopLink onMouseEnter={() => setVisibility(true)} to={pathName}>
        SHOP
      </ShopLink>
      {visibility && <ShopMenuDropDown />}
    </Fragment>
  );
};

export default ShopMenu;
