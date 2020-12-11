import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { fetchSizesGuideStart } from "../../redux/actions/sizes-guide.actions";

import { selectItemByColor } from "../../redux/selectors/collections.selectors";

import ShopItemPictures from "../../components/shop-item/shop-item-detailed/shop-item-pictures/shop-item-pictures.component";
import ShopItemData from "../../components/shop-item/shop-item-detailed/shop-item-data/shop-item-data.component";

import {
  ShopItemPageContainer,
  ShopItemContainer,
} from "./shop-item-page-by-condition.styles";

const ShopItemPageByCondition = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { collection, condition, reference, color } = params;

  const selectedItem = useSelector((state) =>
    selectItemByColor(state, reference, color, shallowEqual)
  );

  const [currentItem, setCurrentItem] = useState(selectedItem);

  useEffect(() => {
    if (selectedItem !== undefined) setCurrentItem(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    if (selectedItem !== undefined)
      dispatch(
        fetchSizesGuideStart(collection, selectedItem.section.replace("-", " "))
      );
  }, [fetchSizesGuideStart, collection, selectedItem]);

  return (
    <ShopItemPageContainer>
      <ShopItemContainer>
        {currentItem && <ShopItemPictures url={currentItem.url} />}
        {currentItem && (
          <ShopItemData
            collection={collection}
            section={`featured/${condition}`}
            item={currentItem}
          />
        )}
      </ShopItemContainer>
      <div>You may also like</div>
      <div>Recent view</div>
    </ShopItemPageContainer>
  );
};

export default ShopItemPageByCondition;
