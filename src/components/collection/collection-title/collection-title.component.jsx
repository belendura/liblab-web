import React from "react";

import { Container, Title, Subtitle } from "./collection-title.styles";

const CollectionTitle = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default CollectionTitle;
