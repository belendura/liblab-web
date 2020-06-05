import React from "react";
import CategoryTitle from "../../components/category/category-title/category-title.component";
import BestSellersList from "../../components/best-sellers/best-sellers-list/best-sellers-list.component";
import CategoriesList from "../../components/categories/categories-list/categories-list.component";
import {
  HomePageContainer,
  CarruselContainer,
  BestSellersContainer,
  CategoriesContainer,
  InstagramContainer,
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
      <CategoriesContainer>
        <CategoriesList />
      </CategoriesContainer>
      <InstagramContainer>Instagram</InstagramContainer>
    </HomePageContainer>
  );
};

export default HomePage;
