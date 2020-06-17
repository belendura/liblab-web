import React, { useState } from "react";

import {
  CollectionFilterColorOptionContainer,
  CollectionFilterColorOptionInput,
  CollectionFilterColorOptionStyled,
  CollectionFilterColorOptionLabel,
  Icon,
} from "./collection-filter-color-option.styles";

const CollectionFilterColorOption = ({ id, handleChange }) => {
  const { code, name, dark } = id;
  console.log("dark", dark);
  const [checked, setChecked] = useState(false);

  const handleOptionChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
  };
  return (
    <CollectionFilterColorOptionContainer>
      <CollectionFilterColorOptionInput
        type="checkbox"
        id={name}
        color={code}
        onChange={(handleChange, handleOptionChange)}
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
