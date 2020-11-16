import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { fetchSizesGuideStart } from "../../redux/actions/sizes-guide.actions";
import { selectItem } from "../../redux/selectors/collections.selectors";

import ShopItemPictures from "../../components/shop-item/shop-item-detailed/shop-item-pictures/shop-item-pictures.component";
import ShopItemData from "../../components/shop-item/shop-item-detailed/shop-item-data/shop-item-data.component";

import {
  ShopItemPageContainer,
  ShopItemContainer,
} from "./shop-item-page.styles";
const ShopItemPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { collection, section, reference, color } = params;

  const [displayedItem, setDisplayedItem] = useState(0);

  useEffect(() => {
    dispatch(
      fetchSizesGuideStart(collection, section.replace("scrub-", "").trim())
    );
  }, [fetchSizesGuideStart, collection, section]);

  const selectedItem = useSelector((state) =>
    selectItem(state, reference, color, shallowEqual)
  );

  const handleDifferentColor = (event) => {
    const { id } = event.target;
    setDisplayedItem(
      selectedItem.findIndex((item) => item["Color"].name === id)
    );
  };

  return (
    <ShopItemPageContainer>
      <ShopItemContainer>
        {selectedItem && (
          <ShopItemPictures url={selectedItem[displayedItem].Url} />
        )}
        {selectedItem && (
          <ShopItemData
            collection={collection}
            section={section}
            item={selectedItem[displayedItem]}
            handleDifferentColor={handleDifferentColor}
          />
        )}
      </ShopItemContainer>
      <div>You may also like</div>
      <div>Recent view</div>
    </ShopItemPageContainer>
  );
};

export default ShopItemPage;
