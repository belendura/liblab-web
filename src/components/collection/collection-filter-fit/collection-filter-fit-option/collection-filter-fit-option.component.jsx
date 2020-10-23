import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectFilteredFit } from "../../../../redux/selectors/collections.selectors";

import {
  CollectionFilterFitOptionContainer,
  CollectionFilterFitOptionInput,
  CollectionFilterFitOptionStyled,
  CollectionFilterFitOptionLabel,
  Icon,
} from "./collection-filter-fit-option.styles";

const CollectionFilterFitOption = ({ id, handleChange }) => {
  const [checked, setChecked] = useState(false);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);

  useEffect(() => {
    filteredFit.includes(id) ? setChecked(true) : setChecked(false);
  }, [filteredFit]);

  const handleOptionChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
    handleChange(event);
  };

  return (
    <CollectionFilterFitOptionContainer>
      <CollectionFilterFitOptionInput
        type="checkBox"
        id={id}
        onChange={handleOptionChange}
      />
      <CollectionFilterFitOptionStyled checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </CollectionFilterFitOptionStyled>
      <CollectionFilterFitOptionLabel>{id}</CollectionFilterFitOptionLabel>
    </CollectionFilterFitOptionContainer>
  );
};

export default CollectionFilterFitOption;
