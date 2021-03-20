import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectFeaturedShopMenu } from "../../../../redux/selectors/collections.selectors";

import FeaturedShopMenu from "./components/featured-shop-menu";

import { Container } from "./featured-shop-menu-list.styles";

const FeaturedShopMenuList = () => {
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

export default FeaturedShopMenuList;
