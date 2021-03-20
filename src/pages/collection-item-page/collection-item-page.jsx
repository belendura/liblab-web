import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import queryString from "query-string";

import { fetchItemStart } from "../../redux/actions/collections.actions";
import { fetchSizesGuideStart } from "../../redux/actions/sizes-guide.actions";

import { selectItemByColor } from "../../redux/selectors/collections.selectors";
import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";

import ItemPictures from "./components/item-pictures";
import ItemData from "./components/item-data";
import RecentView from "./components/recent-view";

import {
  Container,
  ShopItemContainer,
  ExtrasContainer,
  Title,
} from "./collection-item-page.styles";

const CollectionItemPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { urlCollection, urlSection, urlReference } = params;

  const { search } = useLocation();

  const query = queryString.parse(search, { arrayFormat: "comma" });

  const { colors } = query;

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);

  useEffect(() => {
    dispatch(fetchSizesGuideStart(urlCollection, urlSection));
  }, [fetchSizesGuideStart, urlCollection, urlSection]);

  const selectedItem = useSelector((state) =>
    selectItemByColor(
      state,
      urlReference,
      colors.replace("-", " "),
      shallowEqual
    )
  );

  const [currentItem, setCurrentItem] = useState(selectedItem);
  const [recentViewedList, setRecentViewedList] = useState(
    JSON.parse(localStorage.getItem("recentviewed"))
  );

  const updateRecentViewedList = (recentViewedList, item) => {
    let viewedList = [];
    if (!recentViewedList) {
      viewedList.push(item);
    } else {
      viewedList = [...recentViewedList];
      viewedList.unshift(item);
      if (recentViewedList.length > 6) {
        viewedList.pop();
      }
    }

    const filteredList = viewedList.reduce((accum, item) => {
      const found = accum.find((findItem) => {
        return (
          findItem.reference === item.reference &&
          findItem.color.code === item.color.code
        );
      });
      return found !== undefined ? accum : [...accum, item];
    }, []);

    return filteredList;
  };

  const url = `/shop/${urlCollection}/${urlSection}/${urlReference}`;

  useEffect(() => {
    if (selectedItem !== undefined && selectedItem !== null)
      setCurrentItem(selectedItem);
    else {
      dispatch(fetchItemStart(url, query, wishlistItems));
    }
  }, [dispatch, url, query, wishlistItems]);

  useEffect(() => {
    return () => {
      if (selectedItem !== undefined && selectedItem !== null) {
        const {
          url,
          collection,
          section,
          reference,
          description,
          color,
        } = selectedItem;
        const newUrl = url[0];
        const itemData = {
          newUrl,
          collection,
          section,
          reference,
          description,
          color,
        };
        const newList = updateRecentViewedList(recentViewedList, itemData);
        localStorage.setItem("recentviewed", JSON.stringify(newList));
      }
    };
  }, []);

  return (
    <Container>
      <ShopItemContainer>
        {currentItem && <ItemPictures url={currentItem.url} />}
        {currentItem && (
          <ItemData
            collection={urlCollection}
            section={urlSection}
            item={currentItem}
            query={query}
          />
        )}
      </ShopItemContainer>
      <Title>You may also like...</Title>
      <Title>The last thing you viewed...</Title>
      <ExtrasContainer>
        {recentViewedList &&
          recentViewedList
            .filter((item, index) => index < 6)
            .map((item, index) => <RecentView key={index} item={item} />)}
      </ExtrasContainer>
    </Container>
  );
};

export default CollectionItemPage;
