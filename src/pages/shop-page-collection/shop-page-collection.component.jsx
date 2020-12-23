import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { selectSectionPicture } from "../../redux/selectors/collections.selectors";

import { fetchCollectionStart } from "../../redux/actions/collections.actions";

import CollectionFilter from "../../components/collection/collection-filter/collection-filter.component";
import CollectionList from "../../components/collection/collection-list/collection-list.component";

import {
  Container,
  CoverContainer,
  PictureContainer,
  Picture,
  TitleContainer,
  Title,
} from "./shop-page-collection.styles";

const ShopPageCollection = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { collection} = params;

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  const picture = useSelector(selectSectionPicture, shallowEqual);

  useEffect(() => {
    dispatch(fetchCollectionStart(collection,  wishlistItems));
  }, [fetchCollectionStart, collection, wishlistItems]);

  return (
    <Container>
      <CoverContainer>
        <PictureContainer>
          {picture && <Picture src={Object.values(picture)} />}
        </PictureContainer>
        <TitleContainer>
          <Title>{collection}</Title>
        </TitleContainer>
      </CoverContainer>
      <CollectionFilter />
      <CollectionList condition={null} params={params} />
    </Container>
  );
};

export default ShopPageCollection;
