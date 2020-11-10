import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectShopMenu } from "../../../redux/selectors/collections.selectors";
import CollectionOverview from "../../collections/collection-overview/collection-overview.component";

import image_2 from "../../../assets/images/image_2.jpg";
import image_3 from "../../../assets/images/image_3.jpg";
import image from "../../../assets/images/drying-clothes.jpg";

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

  return (
    <Container>
      <CollectionsContainer>
        {shopMenu &&
          Object.entries(shopMenu).map(([key, value]) => {
            return (
              <CollectionContainer key={key}>
                <CollectionLink to={`shop/${key}/${value[0]}`}>
                  {key}
                </CollectionLink>
                {value.map((sectionItem) => (
                  <SectionLink key={key} to={`/shop/${key}/${sectionItem}`}>
                    {sectionItem}
                  </SectionLink>
                ))}
              </CollectionContainer>
            );
          })}
      </CollectionsContainer>
      <CollectionOverviewContainer>
        <CollectionOverview title="women/scrubs" url={image_2} size="small" />
        <CollectionOverview title="men" url={image_3} size="small" />
        <CollectionOverview title="best-sellers" url={image} size="small" />
      </CollectionOverviewContainer>
    </Container>
  );
};

export default ShopDropDown;
