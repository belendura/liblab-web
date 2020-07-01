import React from "react";

import CollectionOverview from "../../collection/collection-overview/collection-overview.component";

import image_1 from "../../../assets/images/image_1.jpg";
import image_2 from "../../../assets/images/image_2.jpg";
import image_3 from "../../../assets/images/image_3.jpg";
import image_4 from "../../../assets/images/image_4.jpg";

import { CollectionsListContainer } from "./collections-list.styles";

const CollectionsList = () => {
  return (
    <CollectionsListContainer>
      <CollectionOverview title="women" url={image_1} size="large" />
      <CollectionOverview title="men" url={image_2} size="large" />
      <CollectionOverview title="unisex" url={image_3} size="large" />
      <CollectionOverview title="accesories" url={image_4} size="large" />
    </CollectionsListContainer>
  );
};

export default CollectionsList;