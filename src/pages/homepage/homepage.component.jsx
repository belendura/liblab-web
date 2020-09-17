import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCollectionStart } from "../../redux/actions/collections.actions";

import CollectionTitle from "../../components/collection/collection-title/collection-title.component";
import BestSellersList from "../../components/best-sellers/best-sellers-list/best-sellers-list.component";
import CollectionsList from "../../components/collections/collections-list/collections-list.component";
import {
  HomePageContainer,
  CarruselContainer,
  BestSellersContainer,
  CollectionsContainer,
  InstagramContainer,
} from "./homepage.styles";

const HomePage = () => {
  const dispatch = useDispatch();
  const title = "Best Sellers";
  const description = "Shop our most wanted items.";
  const url = "best-sellers";

  useEffect(() => {
    dispatch(fetchCollectionStart("BestSeller"));
  }, [fetchCollectionStart]);

  return (
    <HomePageContainer>
      <CarruselContainer>Carrusel</CarruselContainer>
      <BestSellersContainer>
        <CollectionTitle title={title} description={description} url={url} />
        <BestSellersList />
      </BestSellersContainer>
      <CollectionsContainer>
        <CollectionsList />
      </CollectionsContainer>
      <InstagramContainer>Instagram</InstagramContainer>
    </HomePageContainer>
  );
};

export default HomePage;
