import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useLocation, useParams} from "react-router-dom";
import queryString from "query-string";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { selectSectionPicture } from "../../redux/selectors/collections.selectors";

import { fetchShopItemsStart } from "../../redux/actions/collections.actions";

import { toServerEnumerate } from "../../firebase/enumerate";

import FilterBar from "../../components/filter-bar/filter-bar.component";
import CollectionList from "../../components/collection/collection-list/collection-list.component";

import {
  Container,
  CoverContainer,
  PictureContainer,
  Picture,
  TitleContainer,
  Title,
} from "./shop-page.styles";

const isObject = (value) => typeof value === "object" && value !== null;
const isArray = (value) => isObject(value) && value.constructor === Array;


const ShopPage = () => {
  const dispatch = useDispatch();
  const params=useParams();
  const { collection, section }=params; 
  const { search } = useLocation(); 

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  const picture = useSelector(selectSectionPicture, shallowEqual);
console.log("search",search);
  const query = queryString.parse(search, { arrayFormat: "comma" });
  console.log(query);
   const { labels } = query;
console.log("labels",labels);
  // const isNew =
  //   (isArray(labels)
  //     ? labels?.some((label) => label === formServerEnumerate.newItem)
  //     : labels === formServerEnumerate.newItem) || null;
  // const isBestSeller =
  //   (isArray(labels)
  //     ? labels?.some((label) => label === formServerEnumerate.bestSeller)
  //     : labels === formServerEnumerate.bestSeller) || null;
  // const isSale =
  //   (isArray(labels)
  //     ? labels?.some((label) => label === formServerEnumerate.sale)
  //     : labels === formServerEnumerate.sale) || null;
  
  const hasSection = !!section || null;
  const url = hasSection
  ? `/shop/${collection}/${section}`
  : `/shop/${collection}`;

  useEffect(() => {
    dispatch(fetchShopItemsStart(url,query, wishlistItems));
  }, [dispatch,query,url,wishlistItems]);

  return (
    <Container>
      <CoverContainer>
        <PictureContainer>
          {picture && <Picture src={Object.values(picture)} />}
        </PictureContainer>
        <TitleContainer>
          <Title>{section? section.replace("-"," "): labels? labels.replace("-"," "): collection}</Title>
        </TitleContainer>
      </CoverContainer>
      <FilterBar />
      <CollectionList labels={labels && toServerEnumerate[labels.replace("-","")]} params={params} />
    </Container>
  );
};

export default ShopPage;
