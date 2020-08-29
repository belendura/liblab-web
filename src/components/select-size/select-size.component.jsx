import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearSize } from "../../redux/actions/cart.actions";

import SelectSizeDropDown from "./select-size-dropdown/select-size-dropdown.component";

import {
  SelectSizeContainer,
  SelectSizeOption,
  SelectSizeArrowDown,
  SelectSizeArrowUp,
} from "./select-size.styles";

const SelectSize = ({ sizes, selectedSize }) => {
  const [selectSizeVisible, setSelectSizeVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <SelectSizeContainer>
      <SelectSizeOption
        type="text"
        id="size"
        placeholder={selectedSize ? `${selectedSize}` : "Select size"}
      />
      {selectSizeVisible ? (
        <SelectSizeArrowUp onClick={() => setSelectSizeVisible(false)} />
      ) : (
        <SelectSizeArrowDown
          onClick={() => {
            dispatch(clearSize());
            setSelectSizeVisible(true);
          }}
        />
      )}
      {selectSizeVisible && (
        <SelectSizeDropDown
          sizes={sizes}
          setSelectSizeVisible={setSelectSizeVisible}
        />
      )}
    </SelectSizeContainer>
  );
};

export default SelectSize;
