import React, {useEffect, useMemo} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import queryString from "query-string";
// import { toServerEnumerate } from "../../firebase/collections-enumerate";
import { selectWishlistItems } from "../../redux/selectors/wishlist.selectors";
import {selectCarousel, selectShopItems} from "../../redux/selectors/collections.selectors";
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
  const { pathname, search } = useLocation();
  const dispatch = useDispatch();
  const title = "Best Sellers";
  const subtitle = "Shop our most wanted items.";
  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  const shopItems = useSelector(selectShopItems, shallowEqual);
  const carousel = useSelector(selectCarousel, shallowEqual);
  const urlCollection = "featured";
  const labels = {
    bestSeller: "best-sellers",
  };
  const query = useMemo(() =>({
    labels: `${labels.bestSeller}`,
  }), [labels.bestSeller]);
  const pathName = `/shop/${urlCollection}?${queryString.stringify(query, {
    arrayFormat: "comma",
  })}`;
  const url = `/shop/${urlCollection}`;
  const hasCarrousel = !!carousel || null;
  useEffect(() => {
    dispatch(fetchShopItemsStart(url, query, wishlistItems));
  }, [dispatch, query, url, wishlistItems]);
  useEffect(() => {
    dispatch(fetchPicturesStart(["carousel", "collections"]));
  }, [dispatch]);

  return (
    <Container>
      {hasCarrousel && (
        <CarouselContainer>
          <Carousel items={carousel} />
        </CarouselContainer>
      )}
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
              onClick={() =>
                history.push({
                  pathname: pathName,
                  state: {
                    from: `${pathname}${search}`,
                  },
                })
              }
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
