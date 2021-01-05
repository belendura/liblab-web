import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { selectSectionPicture } from "../../redux/selectors/collections.selectors";

import { fetchCollectionByConditionStart } from "../../redux/actions/collections.actions";

import CollectionFilter from "../../components/collection/collection-filter/collection-filter.component";
import CollectionList from "../../components/collection/collection-list/collection-list.component";

import { toServerEnumerate } from "../../firebase/collections-enumerate";

import {
  Container,
  CoverContainer,
  PictureContainer,
  Picture,
  TitleContainer,
  Title,
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
        <PictureContainer>
          {picture && <Picture src={Object.values(picture)} />}
        </PictureContainer>
        <TitleContainer>
          <Title>{condition}</Title>
        </TitleContainer>
      </CoverContainer>
      <CollectionFilter condition={toServerEnumerate[condition.replace(" ", "")]}/>
      <CollectionList
        condition={toServerEnumerate[condition.replace(" ", "")]}
        params={params}
      />
    </Container>
  );
};

export default ShopPageByCondition;
