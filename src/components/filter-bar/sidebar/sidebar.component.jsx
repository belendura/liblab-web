import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import queryString from "query-string";

import { selectShopMenu } from "../../../redux/selectors/collections.selectors";

import { fromServerEnumerate } from "../../../firebase/enumerate";
import {
  Container,
  CollectionContainer,
  CollectionLink,
  SectionLink,
} from "./sidebar.styles";

const Sidebar = () => {
  const shopMenu = useSelector(selectShopMenu, shallowEqual);
  return (
    <Container>
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
    </Container>
  );
};

export default Sidebar;
