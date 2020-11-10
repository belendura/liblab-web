import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectFilteredColors } from "../../../../redux/selectors/collections.selectors";

import {
  Container,
  BoxInput,
  ColorBoxContainer,
  BoxLabel,
  ColorBox,
} from "./collection-filter-color-option.styles";

const CollectionFilterColorOption = ({ id, handleChange }) => {
  const { code, name, dark } = id;
  const [checked, setChecked] = useState(false);
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);

  useEffect(() => {
    filteredColors.includes(name) ? setChecked(true) : setChecked(false);
  }, [filteredColors, name]);

  const handleOptionChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
    handleChange(event);
  };

  return (
    <Container>
      <BoxInput
        type="checkbox"
        id={name}
        color={code}
        onChange={handleOptionChange}
      />
      <ColorBoxContainer checked={checked} code={code}>
        <ColorBox viewBox="0 0 24 24" dark={dark}>
          <polyline points="20 6 9 17 4 12" />
        </ColorBox>
      </ColorBoxContainer>
      <BoxLabel>{name}</BoxLabel>
    </Container>
  );
};

export default CollectionFilterColorOption;
