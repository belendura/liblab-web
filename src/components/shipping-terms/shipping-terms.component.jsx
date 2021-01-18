import React from "react";

import { Container, Title, Text } from "./shipping-terms.styles";

const ShippingTerms = () => {
  return (
    <Container>
      <Title>Delivery</Title>
      <Text>
        Standard delivery: free Delivery in 3 to 5 working days.
        <br />
        During sale and promotion periods, delivery times may be longer than
        usual
      </Text>
      <Title>Returns</Title>
      <Text>Returns: free You have 30 days to return your items.</Text>
    </Container>
  );
};

export default ShippingTerms;
