import React, { useState } from "react";

import ShopDropDown from "./shop-dropdown/shop-dropdown.component";

import { ShopMenuContainer, ShopLink } from "./shop-menu.styles";

const ShopMenu = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <ShopMenuContainer
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        <ShopLink to="/shop/women/scrubs">SHOP</ShopLink>
        {visibility && <ShopDropDown />}
      </ShopMenuContainer>
    </div>
  );
};

export default ShopMenu;
