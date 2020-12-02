import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import {
  selectShopMenu,
  selectShopMenuPictures,
} from "../../../redux/selectors/collections.selectors";

import CollectionOverview from "../../collections/collection-overview/collection-overview.component";

import {
  Container,
  CollectionsContainer,
  CollectionContainer,
  CollectionTitle,
  SectionLink,
  CollectionOverviewContainer,
} from "./shop-dropdown.styles";

const ShopDropDown = () => {
  const shopMenu = useSelector(selectShopMenu, shallowEqual);
  const shopMenuPictures = useSelector(selectShopMenuPictures, shallowEqual);

  return (
    <Container>
      <CollectionsContainer>
        {shopMenu &&
          Object.entries(shopMenu).map(([key, value]) => {
            return (
              <CollectionContainer key={key}>
                <CollectionTitle>{key}</CollectionTitle>
                {value["sections"].map((sectionItem, index) => (
                  <SectionLink
                    section={sectionItem}
                    key={index}
                    to={`/shop/${key}/${sectionItem}`}
                  >
                    {sectionItem}
                  </SectionLink>
                ))}
                {value["featuredSections"].map((sectionItem, index) => (
                  <SectionLink
                    section={sectionItem}
                    key={index}
                    to={`/shop/${key}/featured/${sectionItem}`}
                  >
                    {sectionItem}
                  </SectionLink>
                ))}
              </CollectionContainer>
            );
          })}
      </CollectionsContainer>
      <CollectionOverviewContainer>
        {shopMenuPictures &&
          Object.entries(shopMenuPictures)
            .filter((item, index) => index < 3)
            .map(([key, value]) => {
              return (
                <CollectionOverview
                  key={key}
                  title={key}
                  url={value}
                  size="small"
                />
              );
            })}
      </CollectionOverviewContainer>
    </Container>
  );
};

export default ShopDropDown;
