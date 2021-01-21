import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { filterSizes } from "../../../redux/actions/collections.actions";

import {
  selectShopItemsSizeOptions,
  selectFilteredColors,
  selectFilteredFit,
} from "../../../redux/selectors/collections.selectors";

import FilterSizeOption from "./filter-size-option/filter-size-option.component";

import { Container, Title, OptionContainer } from "./filter-size.styles";

const FilterSize = ({ condition }) => {
  const [sizes, setSizes] = useState([]);
  const dispatch = useDispatch();

  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);
  const sizeOptions = useSelector(
    (state) =>
      selectShopItemsSizeOptions(state, condition, filteredColors, filteredFit),
    shallowEqual
  );

  useEffect(() => {
    dispatch(filterSizes(sizes));
  }, [sizes]);

  const handleChange = (event) => {
    const { checked, id } = event.target;
    if (checked && !sizes.includes(id)) {
      setSizes([...sizes, id]);
    } else if (!checked && sizes.includes(id)) {
      const sizesFiltered = sizes.filter((item) => item !== id);
      setSizes(sizesFiltered);
    }
  };

  return (
    <Container>
      <Title>Size</Title>
      <OptionContainer>
        {sizeOptions
          ? sizeOptions.map((sizeItem, index) => {
              if (sizeItem === "xxs" || sizeItem === "32")
                return (
                  <label key={index}>
                    <FilterSizeOption
                      id={sizeItem}
                      handleChange={handleChange}
                      sizeOptions={sizeOptions}
                    />
                  </label>
                );
            })
          : null}
        {sizeOptions
          ? sizeOptions.map((sizeItem, index) => {
              if (sizeItem !== "xxs" && sizeItem !== "32")
                return (
                  <label key={index}>
                    <FilterSizeOption
                      id={sizeItem}
                      handleChange={handleChange}
                      sizeOptions={sizeOptions}
                    />
                  </label>
                );
            })
          : null}
      </OptionContainer>
    </Container>
  );
};

export default FilterSize;
