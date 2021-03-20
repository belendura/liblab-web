import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { selectShopItemsPicture } from "../../redux/selectors/collections.selectors";

import { fetchShopItemsStart } from "../../redux/actions/collections.actions";

import { toServerEnumerate } from "../../firebase/enumerate";

import FilterBar from "../../components/filter-bar";
import CollectionList from "../../components/collection-list";

import {
  Container,
  CoverContainer,
  PictureContainer,
  Picture,
  TitleContainer,
  Title,
} from "./collection-page.styles";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { urlCollection, urlSection } = params;
  const { search } = useLocation();

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  const picture = useSelector(selectShopItemsPicture, shallowEqual);

  const query = queryString.parse(search, { arrayFormat: "comma" });

  const { labels } = query;

  const hasSection = !!urlSection || null;
  const url = hasSection
    ? `/shop/${urlCollection}/${urlSection}`
    : `/shop/${urlCollection}`;

  useEffect(() => {
    dispatch(fetchShopItemsStart(url, query, wishlistItems));
  }, [dispatch, query, url, wishlistItems]);

  return (
    <Container>
      <CoverContainer>
        <PictureContainer>
          {picture && <Picture src={Object.values(picture)} />}
        </PictureContainer>
        <TitleContainer>
          <Title>
            {urlSection
              ? urlSection.replace("-", " ")
              : labels
              ? labels.replace("-", " ")
              : urlCollection}
          </Title>
        </TitleContainer>
      </CoverContainer>
      <FilterBar />
      <CollectionList
        params={params}
        labels={labels && toServerEnumerate[labels.replace("-", "")]}
      />
    </Container>
  );
};

export default CollectionPage;
