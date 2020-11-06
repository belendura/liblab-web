import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Title } from "./collection-overview.styles";

const CollectionOverview = ({ title, url, size }) => {
  const history = useHistory();
  const path = `/shop/${title}`;
  return (
    <Container
      url={url}
      size={size}
      onClick={() => history.push(`/shop/${title}`)}
    >
      <Title size={size} to={path}>
        {title}
      </Title>
    </Container>
  );
};

export default CollectionOverview;
