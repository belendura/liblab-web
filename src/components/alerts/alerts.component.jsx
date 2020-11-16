import React from "react";

import { Container, TextContainer } from "./alerts.styles.js";

const Alerts = ({ text }) => {
  return (
    <Container>
      <TextContainer>{text}</TextContainer>
    </Container>
  );
};

export default Alerts;
