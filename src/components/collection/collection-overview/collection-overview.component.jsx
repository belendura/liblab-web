import React from "react";
import { useHistory } from "react-router-dom";

import {
  CollectionOverviewContainer,
  Title,
} from "./collection-overview.styles";

const CollectionOverview = ({ title, url, size }) => {
  const history = useHistory();
  const path = `/shop/${title}`;
  return (
    <CollectionOverviewContainer
      url={url}
      size={size}
      onClick={() => history.push(`/shop/${title}`)}
    >
      <Title size={size} to={path}>
        {title}
      </Title>
    </CollectionOverviewContainer>
  );
};

export default CollectionOverview;
