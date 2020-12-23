import React, { Fragment } from "react";

import ShopItemPreview from "../shop-item/shop-item-preview/shop-item-preview.component";

const BestSellersList = ({ section }) => {
  return (
    <Fragment>
      {section
        .filter((item, index) => item.collection === "women")
        .filter((item, index) => index < 1)
        .map((item, index) => (
          <ShopItemPreview key={index} item={item} />
        ))}
      {section
        .filter((item, index) => item.collection === "men")
        .filter((item, index) => index < 1)
        .map((item, index) => (
          <ShopItemPreview key={index} item={item} />
        ))}
      {section
        .filter((item, index) => item.collection === "unisex")
        .filter((item, index) => index < 1)
        .map((item, index) => (
          <ShopItemPreview key={index} item={item} />
        ))}
    </Fragment>
  );
};

export default BestSellersList;
