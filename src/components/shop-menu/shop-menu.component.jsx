import React, { Fragment } from "react";
import queryString from "query-string";
import ShopDropDown from "./shop-dropdown/shop-dropdown.component";
import HeaderLink from "../../layout/header/components/header-link";

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
      <HeaderLink
        to={pathName}
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        SHOP
      </HeaderLink>
      {visibility && <ShopDropDown />}
    </Fragment>
  );
};

export default ShopMenu;
