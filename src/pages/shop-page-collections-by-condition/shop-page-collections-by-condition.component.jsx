import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { selectSectionPicture } from "../../redux/selectors/collections.selectors";

import { fetchCollectionsByConditionStart } from "../../redux/actions/collections.actions";

import FilterBar from "../../components/filter-bar/filter-bar.component";
import CollectionList from "../../components/collection/collection-list/collection-list.component";

import { toServerEnumerate } from "../../firebase/collections-enumerate";

import {
  Container,
  CoverContainer,
  PictureContainer,
  Picture,
  TitleContainer,
  Title,
} from "./shop-page-collections-by-condition.styles";

const ShopPageCollectionsByCondition = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { condition } = params;

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  const picture = useSelector(selectSectionPicture, shallowEqual);

  useEffect(() => {
    dispatch(fetchCollectionsByConditionStart(condition, wishlistItems));
  }, [fetchCollectionsByConditionStart, condition, wishlistItems]);

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
      <FilterBar />
      <CollectionList
        condition={toServerEnumerate[condition.replace(" ", "")]}
        params={params}
      />
    </Container>
  );
};

export default ShopPageCollectionsByCondition;
