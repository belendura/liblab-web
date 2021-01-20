import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectFilteredSizes } from "../../../../redux/selectors/collections.selectors";

import {
  Container,
  BoxInput,
  SizeBoxContainer,
  BoxLabel,
  SizeBox,
} from "./filter-size-option.styles";

const FilterSizeOption = ({ id, handleChange }) => {
  const [checked, setChecked] = useState(false);

  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);

  useEffect(() => {
    filteredSizes.includes(id) ? setChecked(true) : setChecked(false);
  }, [filteredSizes, id]);

  const handleOptionChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
    handleChange(event);
  };

  return (
    <Container>
      <BoxInput type="checkBox" id={id} onChange={handleOptionChange} />
      <SizeBoxContainer checked={checked}>
        <SizeBox viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </SizeBox>
      </SizeBoxContainer>
      <BoxLabel>{id}</BoxLabel>
    </Container>
  );
};

export default FilterSizeOption;
