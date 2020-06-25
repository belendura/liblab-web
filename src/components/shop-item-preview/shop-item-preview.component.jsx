import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  ShopItemContainer,
  ShopItemPicture,
  ShopItemFooter,
  ShopItemFooterDetails,
  ShopItemDescription,
  ShopItemPrice,
  ShopItemFav,
  ShopItemNew,
} from "./shop-item-preview.styles";

const ShopItemPreview = ({ url, description, price, newItem }) => {
  const history = useHistory();
  // console.log(newItem);
  let newText = "";

  useEffect(() => {
    newText = newItem ? "new" : "eyyy";
  });

  return (
    <ShopItemContainer onClick={() => history.push(`/shop/${description}`)}>
      {/* {console.log("newText:", newText)} */}
      <ShopItemPicture url={url} />
      <ShopItemFav />
      <ShopItemFooter>
        <ShopItemNew>{newText}</ShopItemNew>
        <ShopItemFooterDetails>
          <ShopItemDescription>{description}</ShopItemDescription>
          <ShopItemPrice>{price}EUR </ShopItemPrice>
        </ShopItemFooterDetails>
      </ShopItemFooter>
    </ShopItemContainer>
  );
};

export default ShopItemPreview;
