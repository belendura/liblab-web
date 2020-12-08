import React from "react";

import { Container, MainText, SecondaryText } from "./ticker.styles.js";

const Ticker = () => {
  return (
    <Container>
      <MainText>Free shipping to store. </MainText>
      <SecondaryText>At home from € 50.</SecondaryText>
    </Container>
  );
};

export default Ticker;
