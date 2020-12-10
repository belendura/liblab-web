import React from "react";

import {
  TickerContainer,
  Container,
  MainText,
  SecondaryText,
} from "./ticker.styles.js";

const Ticker = () => {
  return (
    <TickerContainer>
      <Container>
        <MainText>Free shipping to store. </MainText>
        <SecondaryText> At home from € 50.</SecondaryText>
      </Container>
    </TickerContainer>
  );
};

export default Ticker;
