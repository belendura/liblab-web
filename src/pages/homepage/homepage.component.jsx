import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import queryString from "query-string";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { selectSection } from "../../redux/selectors/collections.selectors";

import {
  fetchCollectionsByConditionStart,
  fetchPicturesStart,
} from "../../redux/actions/collections.actions";

import CustomButton from "../../components/custom-button/custom-button.component";
import CollectionTitle from "../../components/collection/collection-title/collection-title.component";
import BestSellersList from "../../components/best-sellers-list/best-sellers-list.component";
import CollectionsList from "../../components/collections/collections-list/collections-list.component";
import Carousel from "../../components/carousel/carousel.component";

import {
  Container,
  CarouselContainer,
  BestSellersContainer,
  BestSellersListContainer,
  BestSellersTitle,
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
  const section = useSelector(selectSection, shallowEqual);

  useEffect(() => {
    dispatch(fetchCollectionsByConditionStart("best sellers", wishlistItems));
  }, [dispatch, wishlistItems]);

  useEffect(() => {
    dispatch(fetchPicturesStart(["carousel", "collections"]));
  }, [dispatch]);

  const fakeCollection = "women";
  const fakeSection = "scrub";
  const labels = {
    bestSeller: "best-seller",
    new: "new",
    sale: "sale",
  };
  const query = {
    labels: `${labels.new},${labels.sale},${labels.bestSeller}`,
    colors: "red,blue,green",
  };
  const buttonUrl = `/test/${fakeCollection}/${fakeSection}?${queryString.stringify(
    query,
    {
      arrayFormat: "comma",
    }
  )}`;

  return (
    <Container>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <button onClick={() => history.push(buttonUrl)}>TestPage</button>
      {section && (
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
            <BestSellersList section={section} />
          </BestSellersListContainer>
        </BestSellersContainer>
      )}
      <CollectionsContainer>
        <CollectionsList />
      </CollectionsContainer>
      <InstagramContainer>Instagram</InstagramContainer>
    </Container>
  );
};

export default HomePage;
