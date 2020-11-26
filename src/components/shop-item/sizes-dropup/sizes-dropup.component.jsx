import React from "react";

import {
  Container,
  Title,
  SizeContainer,
  SizeItem,
} from "./sizes-dropup.styles";

const SizesDropUp = ({ sizes, availableUnits }) => {
  return (
    <Container>
      <Title>{availableUnits > 0 ? "Add size" : "Sold OUT"}</Title>
      <SizeContainer>
        {sizes.map((item, index) => {
          const { units, size } = item;
          return (
            <SizeItem key={index} units={units}>
              {size}
            </SizeItem>
          );
        })}
      </SizeContainer>
    </Container>
  );
};

export default SizesDropUp;
