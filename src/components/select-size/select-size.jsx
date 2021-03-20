import React from "react";
import { useDispatch } from "react-redux";
import { clearSize } from "../../redux/actions/cart.actions";

import {
  Container,
  SizeOption,
  ArrowDown,
  ArrowUp,
} from "./select-size.styles";

const SelectSize = ({
  selectedSize,
  selectSizeVisible,
  setSelectSizeVisible,
}) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <SizeOption
        type="text"
        id="size"
        placeholder={selectedSize ? `${selectedSize}` : "Select size"}
        onClick={() => {
          dispatch(clearSize());
          setSelectSizeVisible(!selectSizeVisible);
        }}
      />
      {selectSizeVisible ? (
        <ArrowUp onClick={() => setSelectSizeVisible(false)} />
      ) : (
        <ArrowDown
          onClick={() => {
            dispatch(clearSize());
            setSelectSizeVisible(true);
          }}
        />
      )}
    </Container>
  );
};

export default SelectSize;
