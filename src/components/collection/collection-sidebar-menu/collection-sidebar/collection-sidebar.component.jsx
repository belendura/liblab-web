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
    </Container>
  );
};

export default CollectionSidebar;
