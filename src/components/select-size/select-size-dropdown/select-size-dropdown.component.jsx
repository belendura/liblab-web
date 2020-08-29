import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { selectSize } from "../../../redux/actions/cart.actions";
import SelectSizeOrder from "../select-size-order/select-size-order.component";

import {
  SelectSizeDropDownOptionsContainer,
  SelectSizeDropDownOption,
} from "./select-size-dropdown.styles";

const SelectSizeDropDown = ({ sizes, setSelectSizeVisible }) => {
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();

  const handleHideDropdown = (event) => {
    if (event.key === "Escape" || event.key === " ") {
      setSelectSizeVisible(false);
    }
  };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSelectSizeVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    document.addEventListener("keydown", handleHideDropdown, false);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, false);
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <SelectSizeDropDownOptionsContainer
      ref={wrapperRef}
      // onClick={() => handleClickOutside()}
    >
      {sizes.map((item, index) => {
        const { units, size } = item;
        return (
          <SelectSizeDropDownOption
            units={units}
            key={index}
            onClick={() => {
              units > 0 &&
                dispatch(selectSize(size)) && setSelectSizeVisible(false);
            }}
          >
            {units > 0 ? size : <SelectSizeOrder size={size} />}
          </SelectSizeDropDownOption>
        );
      })}
    </SelectSizeDropDownOptionsContainer>
  );
};

export default SelectSizeDropDown;
