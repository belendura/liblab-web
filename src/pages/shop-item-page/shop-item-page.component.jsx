import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import { selectItem } from "../../redux/selectors/collections.selector";

import ShopItemPictures from "../../components/shop-item-details/shop-item-pictures/shop-item-pictures.component";
import ShopItemData from "../../components/shop-item-details/shop-item-data/shop-item-data.component";

import { ShopItemPageContainer } from "./shop-item-page.styles";
const ShopItemPage = () => {
  const params = useParams();
  const { reference } = params;

  const selectedItem = useSelector((state) =>
    selectItem(state, reference, shallowEqual)
  );

  return (
    <ShopItemPageContainer>
      {selectedItem && selectedItem.length
        ? console.log("selected item 0", selectedItem[0].Url)
        : null}
      {selectedItem && selectedItem.length
        ? console.log("selected item", selectedItem)
        : null}
      {selectedItem && selectedItem.length ? (
        <ShopItemPictures url={selectedItem} />
      ) : null}
      {/* {selectedItem ? <ShopItemData item={selectedItem} /> : null} */}
    </ShopItemPageContainer>
  );
};

export default ShopItemPage;
