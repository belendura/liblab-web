import React, { useState } from "react";

import { Container, SizeOption, OrderMenu } from "./select-size-order.styles";

const SelectSizeOrder = ({ size }) => {
  const [orderVisible, setOrderVisible] = useState(false);

  return (
    <Container>
      <SizeOption>{`${size} - Not available`}</SizeOption>
      <OrderMenu onClick={() => setOrderVisible(true)} />
    </Container>
  );
};

export default SelectSizeOrder;
