import React from "react";
import CategoryTitle from "../../components/category/category-title/category-title.component";
import BestSellersList from "../../components/best-sellers/best-sellers-list/best-sellers-list.component";
import {
  HomePageContainer,
  CarruselContainer,
  BestSellersContainer,
  WomenContainer,
  MenContainer,
} from "./homepage.styles";

const HomePage = () => {
  const title = "Best Sellers";
  const description = "Shop our most wanted items.";
  const url = "best-sellers";
  return (
    <HomePageContainer>
      <CarruselContainer>Carrusel</CarruselContainer>
      <BestSellersContainer>
        <CategoryTitle title={title} description={description} url={url} />
        <BestSellersList />
      </BestSellersContainer>
      <WomenContainer>Women</WomenContainer>
      <MenContainer>Men</MenContainer>
    </HomePageContainer>
  );
};

export default HomePage;
