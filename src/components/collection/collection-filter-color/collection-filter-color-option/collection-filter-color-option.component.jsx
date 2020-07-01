import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectFilteredColors } from "../../../../redux/selectors/collections.selector";

import {
  CollectionFilterColorOptionContainer,
  CollectionFilterColorOptionInput,
  CollectionFilterColorOptionStyled,
  CollectionFilterColorOptionLabel,
  Icon,
} from "./collection-filter-color-option.styles";

const CollectionFilterColorOption = ({ id, handleChange, colorOptions }) => {
  const { code, name, dark } = id;
  const [checked, setChecked] = useState(false);
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);

  useEffect(() => {
    filteredColors.includes(name) ? setChecked(true) : setChecked(false);
  }, [colorOptions]);

  const handleOptionChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
    handleChange(event);
  };

  return (
    <CollectionFilterColorOptionContainer>
      <CollectionFilterColorOptionInput
        type="checkbox"
        id={name}
        color={code}
        onChange={handleOptionChange}
        checked={checked}
      />
      <CollectionFilterColorOptionStyled checked={checked} code={code}>
        <Icon viewBox="0 0 24 24" dark={dark}>
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </CollectionFilterColorOptionStyled>
      <CollectionFilterColorOptionLabel>
        {name}
      </CollectionFilterColorOptionLabel>
    </CollectionFilterColorOptionContainer>
  );
};

export default CollectionFilterColorOption;
