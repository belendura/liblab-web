import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { selectSectionPicture } from "../../redux/selectors/collections.selectors";

import { fetchCollectionByConditionStart } from "../../redux/actions/collections.actions";

import CollectionTitle from "../../components/collection/collection-title/collection-title.component";

import CollectionFilter from "../../components/collection/collection-filter/collection-filter.component";
import CollectionList from "../../components/collection/collection-list/collection-list.component";

import {
  Container,
  CoverContainer,
  CollectionCover,
  TitleContainer,
} from "./shop-page-by-condition.styles";

const ShopPageByCondition = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { collection, condition } = params;

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  const picture = useSelector(selectSectionPicture, shallowEqual);

  useEffect(() => {
    dispatch(
      fetchCollectionByConditionStart(collection, condition, wishlistItems)
    );
  }, [fetchCollectionByConditionStart, collection, condition, wishlistItems]);

  return (
    <Container>
      <CoverContainer>
        <CollectionCover url={() => picture && Object.values(picture)} />
        <TitleContainer>
          <CollectionTitle title={condition} subtitle="" />
        </TitleContainer>
      </CoverContainer>
      <CollectionFilter />
      <CollectionList condition={condition} params={params} />
    </Container>
  );
};

export default ShopPageByCondition;
