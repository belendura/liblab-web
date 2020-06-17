import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useParams } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/actions/collections.actions";

import CollectionCover from "../../components/collection/collection-cover/collection-cover.component";
import CollectionFilterList from "../../components/collection/collection-filter-list/collection-filter-list.component";

import watching_the_sea from "../../assets/images/watching-the-sea.jpg";

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
      <CollectionCover url={watching_the_sea} />
      <CollectionFilterList />
    </ShopPageContainer>
  );
};

export default ShopPage;
