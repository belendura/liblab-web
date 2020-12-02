import React from "react";
import { shallowEqual, useSelector } from "react-redux";

import { selectShopMenu } from "../../../../redux/selectors/collections.selectors";
import {
  Container,
  CollectionContainer,
  CollectionLink,
  SectionLink,
} from "./collection-sidebar.styles";

const CollectionSidebar = () => {
  const shopMenu = useSelector(selectShopMenu, shallowEqual);
  return (
    <Container>
      {shopMenu &&
        Object.entries(shopMenu).map(([key, value]) => {
          return (
            <CollectionContainer key={key}>
              <CollectionLink to={`shop/${key}/${value["sections"][0]}`}>
                {key}
              </CollectionLink>
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
    </Container>
  );
};

export default CollectionSidebar;
