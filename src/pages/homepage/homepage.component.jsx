import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { fetchCollectionByConditionStart } from "../../redux/actions/collections.actions";

import CustomButton from "../../components/custom-button/custom-button.component";
import CollectionTitle from "../../components/collection/collection-title/collection-title.component";
import BestSellersList from "../../components/best-sellers/best-sellers-list/best-sellers-list.component";
import CollectionsList from "../../components/collections/collections-list/collections-list.component";
import Carousel from "../../components/carousel/carousel.component";

import {
  Container,
  CarouselContainer,
  BestSellersContainer,
  BestSellersTitle,
  BestSellersListContainer,
  CollectionsContainer,
  InstagramContainer,
} from "./homepage.styles";

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const title = "Best Sellers";
  const subtitle = "Shop our most wanted items.";
  const url = "best-sellers";

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);

  useEffect(() => {
    dispatch(fetchCollectionByConditionStart("BestSeller", wishlistItems));
  }, []);

  return (
    <Container>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <BestSellersContainer>
        <BestSellersTitle>
          <CollectionTitle title={title} subtitle={subtitle} url={url} />
          <CustomButton
            color="standard"
            onClick={() => history.push(`/shop/${url}`)}
          >
            SHOP NOW
          </CustomButton>
        </BestSellersTitle>
        <BestSellersListContainer>
          <BestSellersList />
        </BestSellersListContainer>
      </BestSellersContainer>
      <CollectionsContainer>
        <CollectionsList />
      </CollectionsContainer>
      <InstagramContainer>Instagram</InstagramContainer>
    </Container>
  );
};

export default HomePage;
