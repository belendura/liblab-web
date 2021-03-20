import React, { Fragment } from "react";
import queryString from "query-string";

import { fromServerEnumerate } from "../../../../../../firebase/enumerate";

import { ShopLink } from "./featured-shop-menu.styles";

const FeaturedShopMenu = ({ item }) => {
  const urlCollection = "featured";
  const query = {
    labels: `${fromServerEnumerate[item]}`,
  };

  const pathName = `/shop/${urlCollection}?${queryString.stringify(query, {
    arrayFormat: "comma",
  })}`;

  return (
    <Fragment>
      <ShopLink item={item} to={pathName}>
        {fromServerEnumerate[item]}
      </ShopLink>
    </Fragment>
  );
};

export default FeaturedShopMenu;
