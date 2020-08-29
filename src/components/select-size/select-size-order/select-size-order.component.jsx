import React, { useState } from "react";

import {
  SelectSizeOrderContainer,
  SelectSizeOrderOption,
  SelectSizeOrderLogo,
} from "./select-size-order.styles";

const SelectSizeOrder = ({ size }) => {
  const [orderVisible, setOrderVisible] = useState(false);

  return (
    <SelectSizeOrderContainer>
      <SelectSizeOrderOption>{`${size} - Not available`}</SelectSizeOrderOption>
      <SelectSizeOrderLogo onClick={() => setOrderVisible(true)} />
    </SelectSizeOrderContainer>
  );
};

export default SelectSizeOrder;
