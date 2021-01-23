import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { fromServerEnumerate } from "../../firebase/enumerate";
import HeaderLink from "../../layout/header/components/header-link";

const FeaturedShopMenu = ({ item }) => {
  const { pathname, search } = useLocation();
  const urlCollection = "featured";
  const query = {
    labels: `${fromServerEnumerate[item]}`,
  };
  const pathName = `/shop/${urlCollection}?${queryString.stringify(query, {
    arrayFormat: "comma",
  })}`;
  const baseColor = item === "sale" ? "red" : "black";

  return (
      <HeaderLink baseColor={baseColor} to={{
        pathname: pathName,
        state: {
          from: `${pathname}${search}`,
        },
      }}>
        {fromServerEnumerate[item]}
      </HeaderLink>
  );
};

export default FeaturedShopMenu;
