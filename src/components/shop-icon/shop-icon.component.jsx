import React, { useState } from "react";

import ShopDropDown from "./shop-dropdown/shop-dropdown.component";

import { ShopIconContainer, ShopLink } from "./shop-icon.styles";

const ShopIcon = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <ShopIconContainer
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        <ShopLink to="/shop/women">SHOP</ShopLink>
        {visibility && <ShopDropDown />}
      </ShopIconContainer>
    </div>
  );
};

export default ShopIcon;
