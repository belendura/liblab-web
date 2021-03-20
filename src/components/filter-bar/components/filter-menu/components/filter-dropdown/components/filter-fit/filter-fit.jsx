import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { filterFit } from "../../../../../../../../redux/actions/collections.actions";

import {
  selectShopItemsFitOptions,
  selectFilteredColors,
  selectFilteredSizes,
} from "../../../../../../../../redux/selectors/collections.selectors";

import FilterFitOption from "./components/filter-fit-option";

import { Container, Title, OptionsContainer } from "./filter-fit.styles";

const FilterFit = ({ condition }) => {
  const [fit, setFit] = useState([]);
  const dispatch = useDispatch();

  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);

  const fitOptions = useSelector(
    (state) =>
      selectShopItemsFitOptions(
        state,
        condition,
        filteredColors,
        filteredSizes
      ),
    shallowEqual
  );

  useEffect(() => {
    dispatch(filterFit(fit));
  }, [filterFit, fit]);

  const handleChange = (event) => {
    const { checked, id } = event.target;
    if (checked && !fit.includes(id)) {
      setFit([...fit, id]);
    } else if (!checked && fit.includes(id)) {
      const fitFiltered = fit.filter((item) => item !== id);
      setFit(fitFiltered);
    }
  };

  return (
    <Container>
      <Title>Fit</Title>
      <OptionsContainer>
        {fitOptions
          ? fitOptions.map((fitItem, index) => (
              <label key={index}>
                <FilterFitOption id={fitItem} handleChange={handleChange} />
              </label>
            ))
          : null}
      </OptionsContainer>
    </Container>
  );
};

export default FilterFit;
