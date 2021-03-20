import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  PictureContainer,
  Picture,
  Title,
} from "./collection-overview.styles";

const CollectionOverview = ({ title, url, size }) => {
  const history = useHistory();
  const path = `/shop/${title}`;
  return (
    <Container>
      <PictureContainer onClick={() => history.push(`/shop/${title}`)}>
        <Picture src={url} />
        <Title size={size} to={path}>
          {title}
        </Title>
      </PictureContainer>
    </Container>
  );
};

export default CollectionOverview;
