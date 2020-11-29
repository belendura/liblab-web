import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectPictures } from "../../../redux/selectors/collections.selectors";

import CollectionOverview from "../collection-overview/collection-overview.component";

import { Container } from "./collections-list.styles";

const CollectionsList = () => {
  const pictures = useSelector(selectPictures, shallowEqual);

  return (
    <Container>
      {pictures &&
        Object.entries(pictures["collections"])
          .filter((item, index) => index < 3)
          .map(([key, value]) => (
            <CollectionOverview
              key={key}
              title={key}
              url={value}
              size="large"
            />
          ))}
    </Container>
  );
};

export default CollectionsList;
