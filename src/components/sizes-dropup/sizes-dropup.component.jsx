import React from "react";

import { Container, Title, SizeContainer, Size } from "./sizes-dropup.styles";

const SizesDropUp = ({ sizes, availableUnits, wishlist, selectedSize }) => {
  return (
    <Container>
      <Title>{availableUnits > 0 ? "Add size" : "Sold OUT"}</Title>
      <SizeContainer>
        {sizes &&
          sizes.map((item, index) => {
            const { units, size } = item;
            return (
              <Size
                key={index}
                units={units}
                size={size}
                wishlist={wishlist}
                selectedSize={selectedSize}
              >
                {size}
              </Size>
            );
          })}
      </SizeContainer>
    </Container>
  );
};

export default SizesDropUp;
