import React, { useState } from "react";

import ShopDropDown from "./shop-dropdown/shop-dropdown.component";

import { Container, ShopLink } from "./shop-menu.styles";

const ShopMenu = ({ visibility, setVisibility }) => {
  // const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <Container onMouseEnter={() => setVisibility(true)}>
        <ShopLink to="/shop/women/scrub-tops">SHOP</ShopLink>
        {visibility && <ShopDropDown />}
      </Container>
    </div>
  );
};

export default ShopMenu;
