import React, { Fragment } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectFeaturedShopMenu } from "../../../redux/selectors/collections.selectors";

import FeaturedShopMenu from "../featured-shop-menu.component";

import { Container } from "./featured-shop-menu-list.styles";

const FeaturedShopMenusList = () => {
  const featuredShopMenu = useSelector(selectFeaturedShopMenu, shallowEqual);

  return (
    <Container>
      {featuredShopMenu &&
        featuredShopMenu.map((item, index) => (
          <FeaturedShopMenu key={index} item={item} />
        ))}
    </Container>
  );
};

export default FeaturedShopMenusList;
