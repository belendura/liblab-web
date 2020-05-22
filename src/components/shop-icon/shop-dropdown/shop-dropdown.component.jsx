import React, { useState } from "react";

import MenuPicture from "../../menu-picture/menu-picture.component";
import {
  ShopDropDownContainer,
  MenuContainer,
  PictureContainer,
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
      <PictureContainer>
        <MenuPicture />
        <MenuPicture />
        <MenuPicture />
      </PictureContainer>
    </ShopDropDownContainer>
  );
};

export default ShopDropDown;
