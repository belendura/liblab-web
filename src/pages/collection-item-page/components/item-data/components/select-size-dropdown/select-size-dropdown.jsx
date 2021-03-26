import React from "react";
import { useDispatch } from "react-redux";

import { selectSize } from "../../../../../../redux/actions/cart.actions";

import SelectSizeOrder from "./components/select-size-order";
import ClickOutside from "../../../../../../components/click-outside";

import { Container, SizeOption } from "./select-size-dropdown.styles";

const SelectSizeDropDown = ({ sizes, setSelectSizeVisible, colors }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ClickOutside action={() => setSelectSizeVisible(false)}>
        <Container>
          {sizes &&
            sizes.map((item, index) => {
              const { units, size } = item;
              return (
                <SizeOption
                  units={units}
                  key={index}
                  onClick={() => {
                    units > 0 &&
                      dispatch(selectSize(size)) &&
                      setSelectSizeVisible(false);
                  }}
                >
                  {units > 0 ? (
                    size
                  ) : (
                    <SelectSizeOrder size={size} colors={colors} />
                  )}
                </SizeOption>
              );
            })}
        </Container>
      </ClickOutside>
    </div>
  );
};

export default SelectSizeDropDown;
