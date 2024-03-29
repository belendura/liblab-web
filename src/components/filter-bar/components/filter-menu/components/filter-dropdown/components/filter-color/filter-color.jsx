import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  selectShopItemsColorOptions,
  selectFilteredSizes,
  selectFilteredFit,
} from "../../../../../../../../redux/selectors/collections.selectors";
import { filterColors } from "../../../../../../../../redux/actions/collections.actions";

import FilterColorOption from "./components/filter-color-option";

import { Container, Title, OptionsContainer } from "./filter-color.styles";

const FilterColor = ({ condition }) => {
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();

  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);

  const filteredFit = useSelector(selectFilteredFit, shallowEqual);

  const colorOptions = useSelector(
    (state) =>
      selectShopItemsColorOptions(state, condition, filteredSizes, filteredFit),
    shallowEqual
  );

  useEffect(() => {
    dispatch(filterColors(colors));
  }, [colors]);

  const handleChange = (event) => {
    const { checked, id } = event.target;
    if (checked && !colors.includes(id)) {
      setColors([...colors, id]);
    } else if (!checked && colors.includes(id)) {
      const colorsFiltered = colors.filter((item) => item !== id);
      setColors(colorsFiltered);
    }
  };

  return (
    <Container>
      <Title>Color</Title>
      <OptionsContainer>
        {colorOptions
          ? colorOptions.map((colorItem, index) => {
              return (
                <label key={index}>
                  <FilterColorOption
                    id={colorItem}
                    handleChange={handleChange}
                  />
                </label>
              );
            })
          : null}
      </OptionsContainer>
    </Container>
  );
};

export default FilterColor;
