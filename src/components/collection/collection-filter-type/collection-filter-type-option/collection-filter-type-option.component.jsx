import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

// import { selectFilteredType } from "../../../../redux/selectors/collections.selectors";

import {
  Container,
  BoxInput,
  TypeBoxContainer,
  BoxLabel,
  TypeBox,
} from "./collection-filter-type-option.styles";

const CollectionFilterTypeOption = ({ id, handleChange }) => {
  const [checked, setChecked] = useState(false);

  // const filteredType = useSelector(selectFilteredType, shallowEqual);

  // useEffect(() => {
  //   filteredType.includes(id) ? setChecked(true) : setChecked(false);
  // }, [filteredTypeses, id]);

  const handleOptionChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
    handleChange(event);
  };

  return (
    <Container>
      <BoxInput type="checkBox" id={id} onChange={handleOptionChange} />
      <TypeBoxContainer checked={checked}>
        <TypeBox viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </TypeBox>
      </TypeBoxContainer>
      <BoxLabel>{id}</BoxLabel>
    </Container>
  );
};

export default CollectionFilterTypeOption;
