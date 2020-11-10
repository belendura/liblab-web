import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearSize } from "../../redux/actions/cart.actions";

import SelectSizeDropDown from "./select-size-dropdown/select-size-dropdown.component";

import {
  Container,
  SizeOption,
  ArrowDown,
  ArrowUp,
} from "./select-size.styles";

const SelectSize = ({ sizes, selectedSize }) => {
  const [selectSizeVisible, setSelectSizeVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <SizeOption
          type="text"
          id="size"
          placeholder={selectedSize ? `${selectedSize}` : "Select size"}
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
      {selectSizeVisible && (
        <SelectSizeDropDown
          sizes={sizes}
          setSelectSizeVisible={setSelectSizeVisible}
        />
      )}
    </div>
  );
};

export default SelectSize;
