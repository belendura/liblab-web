import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectFilteredFit } from "../../../../redux/selectors/collections.selectors";

import {
  Container,
  BoxInput,
  FitBoxContainer,
  BoxLabel,
  FitBox,
} from "./collection-filter-fit-option.styles";

const CollectionFilterFitOption = ({ id, handleChange }) => {
  const [checked, setChecked] = useState(false);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);

  useEffect(() => {
    filteredFit.includes(id) ? setChecked(true) : setChecked(false);
  }, [filteredFit, id]);

  const handleOptionChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
    handleChange(event);
  };

  return (
    <Container>
      <BoxInput type="checkBox" id={id} onChange={handleOptionChange} />
      <FitBoxContainer checked={checked}>
        <FitBox viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </FitBox>
      </FitBoxContainer>
      <BoxLabel>{id}</BoxLabel>
    </Container>
  );
};

export default CollectionFilterFitOption;
