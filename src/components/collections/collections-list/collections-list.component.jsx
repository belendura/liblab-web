import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectPictures } from "../../../redux/selectors/collections.selectors";

import CollectionOverview from "../collection-overview/collection-overview.component";

import { Container } from "./collections-list.styles";

const CollectionsList = () => {
  const pictures = useSelector(selectPictures, shallowEqual);

  return (
    <Container>
      {console.log("pictures", pictures)}
      {pictures &&
        Object.entries(pictures["carousel"])
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
