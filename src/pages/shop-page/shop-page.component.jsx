import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useParams } from "react-router-dom";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { selectSectionPicture } from "../../redux/selectors/collections.selectors";

import { fetchSectionStart } from "../../redux/actions/collections.actions";

import CollectionFilter from "../../components/collection/collection-filter/collection-filter.component";
import CollectionList from "../../components/collection/collection-list/collection-list.component";

import {
  Container,
  CoverContainer,
  PictureContainer,
  Picture,
  TitleContainer,
  Title,
} from "./shop-page.styles";

const ShopPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { collection, section } = params;

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  const picture = useSelector(selectSectionPicture, shallowEqual);

  useEffect(() => {
    dispatch(fetchSectionStart(collection, section, wishlistItems));
  }, [fetchSectionStart, collection, section, wishlistItems]);

  return (
    <Container>
      <CoverContainer>
        <PictureContainer>
          {picture && <Picture src={Object.values(picture)} />}
        </PictureContainer>
        <TitleContainer>
          <Title>{section}</Title>
        </TitleContainer>
      </CoverContainer>
      <CollectionFilter />
      <CollectionList params={params} />
    </Container>
  );
};

export default ShopPage;
