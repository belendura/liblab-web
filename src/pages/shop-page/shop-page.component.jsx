import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchSectionStart } from "../../redux/actions/collections.actions";

import CollectionCover from "../../components/collection/collection-cover/collection-cover.component";
import CollectionFilter from "../../components/collection/collection-filter/collection-filter.component";
import CollectionList from "../../components/collection/collection-list/collection-list.component";

import watching_the_sea from "../../assets/images/watching-the-sea.jpg";

import { ShopPageContainer } from "./shop-page.styles";

const ShopPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { collection, section } = params;

  useEffect(() => {
    dispatch(fetchSectionStart(collection, section));
  }, []);

  return (
    <ShopPageContainer>
      <CollectionCover url={watching_the_sea} title={section} />
      <CollectionFilter />
      <CollectionList params={params} />
    </ShopPageContainer>
  );
};

export default ShopPage;
