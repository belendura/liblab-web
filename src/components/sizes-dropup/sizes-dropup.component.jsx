import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  addItemFromPreview,
  displayCart,
} from "../../redux/actions/cart.actions";

import { selectCartHidden } from "../../redux/selectors/cart.selectors";

import { Container, Title, SizeContainer, Size } from "./sizes-dropup.styles";

const SizesDropUp = ({
  sizes,
  availableUnits,
  currentItem,
  wishlist,
  selectedSize,
}) => {
  const dispatch = useDispatch();
  const cartHidden = useSelector(selectCartHidden, shallowEqual);
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
                onClick={() => {
                  dispatch(addItemFromPreview(currentItem, size));
                  cartHidden && dispatch(displayCart());
                }}
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
