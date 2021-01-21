import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import queryString from "query-string";

import {
  selectShopMenu,
  selectShopMenuPictures,
} from "../../../redux/selectors/collections.selectors";

import CollectionOverview from "../../collections/collection-overview/collection-overview.component";

import { fromServerEnumerate } from "../../../firebase/enumerate";
import {
  Container,
  CollectionsContainer,
  CollectionContainer,
  CollectionLink,
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
          Object.entries(shopMenu).map(([key, value], index) => {
            return (
              <CollectionContainer key={key}>
                <CollectionLink key={index} to={`/shop/${key}`}>
                  {key}
                </CollectionLink>
                {value["sections"].map((sectionItem, index) => (
                  <SectionLink
                    section={fromServerEnumerate[sectionItem]}
                    key={index}
                    to={`/shop/${key}/${fromServerEnumerate[sectionItem]}`}
                  >
                    {fromServerEnumerate[sectionItem].replace("-", " ")}
                  </SectionLink>
                ))}
                {value["featuredSections"].map((sectionItem, index) => {
                  const query = {
                    labels: `${fromServerEnumerate[sectionItem]}`,
                  };

                  const url = `/shop/${key}?${queryString.stringify(query, {
                    arrayFormat: "comma",
                  })}`;
                  return (
                    <SectionLink
                      section={fromServerEnumerate[sectionItem]}
                      key={index}
                      to={url}
                    >
                      {fromServerEnumerate[sectionItem].replace("-", " ")}
                    </SectionLink>
                  );
                })}
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
