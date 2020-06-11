import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/actions/collections.actions";

import CollectionCover from "../../components/collection/collection-cover/collection-cover.component";
import CollectionFilterList from "../../components/collection/collection-filter-list/collection-filter-list.component";

import image_3 from "../../assets/images/image_3.jpg";

import { ShopPageContainer } from "./shop-page.styles";

const ShopPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { collection, section } = params;

  useEffect(() => {
    dispatch(fetchCollectionsStart(collection, section));
  }, [fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <CollectionCover url={image_3} />
      <CollectionFilterList />
    </ShopPageContainer>
  );
};

export default ShopPage;
