import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import queryString from "query-string";

// import { toServerEnumerate } from "../../firebase/collections-enumerate";

import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import { selectShopItems } from "../../redux/selectors/collections.selectors";

import {
  fetchShopItemsStart,
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

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  const shopItems = useSelector(selectShopItems, shallowEqual);

  const urlCollection = "featured";

  const labels = {
    bestSeller: "best-sellers",
  };

  const query = {
    labels: `${labels.bestSeller}`,
  };

  const pathName = `/shop/${urlCollection}?${queryString.stringify(query, {
    arrayFormat: "comma",
  })}`;

  const url = `/shop/${urlCollection}`;

  useEffect(() => {
    dispatch(fetchShopItemsStart(url, query, wishlistItems));
  }, [wishlistItems]);

  useEffect(() => {
    dispatch(fetchPicturesStart(["carousel", "collections"]));
  }, [dispatch]);

  return (
    <Container>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      {shopItems && (
        <BestSellersContainer>
          <BestSellersTitle>
            <CollectionTitle
              title={title}
              subtitle={subtitle}
              url={labels.bestSellers}
            />
            <CustomButton
              color="standard"
              onClick={() => history.push(pathName)}
            >
              SHOP NOW
            </CustomButton>
          </BestSellersTitle>
          <BestSellersListContainer>
            <BestSellersList shopItems={shopItems} />
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
