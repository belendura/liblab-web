import React from "react";

import ShopOverview from "../../shop-overview/shop-overview.component";

import image_2 from "../../../assets/images/image_2.jpg";
import image_3 from "../../../assets/images/image_3.jpg";
import image_4 from "../../../assets/images/image_4.jpg";
import image from "../../../assets/images/drying-clothes.jpg";

import {
  ShopDropDownContainer,
  MenuContainer,
  ShopOverviewContainer,
  CollectionContainer,
  CollectionLink,
  CategoryLink,
} from "./shop-dropdown.styles";

const ShopDropDown = () => {
  return (
    <ShopDropDownContainer>
      <MenuContainer>
        <CollectionContainer>
          <CollectionLink to="/shop/women">Women</CollectionLink>
          <CategoryLink to="/shop/women/scrubs">Scrubs</CategoryLink>
          <CategoryLink to="/shop/women/tops">Tops</CategoryLink>
          <CategoryLink to="/shop/women/pants">Pants</CategoryLink>
          <CategoryLink to="/shop/women/jackets">Jackets & Coats</CategoryLink>
        </CollectionContainer>
        <CollectionContainer>
          <CollectionLink to="/shop/men">Men</CollectionLink>
          <CategoryLink to="/shop/men/scrubs">Scrubs</CategoryLink>
          <CategoryLink to="/shop/men/tops">Tops</CategoryLink>
          <CategoryLink to="/shop/men/pants">Pants</CategoryLink>
          <CategoryLink to="/shop/men/jackets">Jackets & Coats</CategoryLink>
        </CollectionContainer>
        <CollectionContainer>
          <CollectionLink to="/shop/accessories">Accesories</CollectionLink>
          <CategoryLink to="/shop/accessories/Face-masks">
            Face Masks
          </CategoryLink>
          <CategoryLink to="/shop/accessories/Socks">Socks</CategoryLink>
          <CategoryLink to="/shop/accessories/Hats">Hats</CategoryLink>
          <CategoryLink to="/shop/accessories/Bumb-Bags">
            Bumb bags
          </CategoryLink>
          <CategoryLink to="/shop/accessories/Underware">
            Underware
          </CategoryLink>
        </CollectionContainer>
        <CollectionContainer>
          <CollectionLink to="/shop/unisex">Unisex</CollectionLink>
          <CategoryLink to="/shop/unisex/scrubs">Scrubs</CategoryLink>
        </CollectionContainer>
      </MenuContainer>
      <ShopOverviewContainer>
        <ShopOverview title="women" url={image_2} />
        <ShopOverview title="men" url={image_3} />
        <ShopOverview title="best-sellers" url={image} />
      </ShopOverviewContainer>
    </ShopDropDownContainer>
  );
};

export default ShopDropDown;
