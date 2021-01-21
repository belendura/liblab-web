import React, { Fragment } from "react";
import queryString from "query-string";

import ShopDropDown from "./shop-dropdown/shop-dropdown.component";

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
      {visibility && <ShopDropDown />}
    </Fragment>
  );
};

export default ShopMenu;
