import React, { useState } from "react";

import {
  CollectionFilterSizeOptionContainer,
  CollectionFilterSizeOptionInput,
  CollectionFilterSizeOptionStyled,
  CollectionFilterSizeOptionLabel,
  Icon,
} from "./collection-filter-size-option.styles";

const CollectionFilterSizeOption = ({ id, handleChange }) => {
  const [checked, setChecked] = useState(false);

  const handleOptionChange = (event) => {
    const { checked } = event.target;
    setChecked(checked);
    handleChange(event);
  };

  return (
    <CollectionFilterSizeOptionContainer>
      <CollectionFilterSizeOptionInput
        type="checkBox"
        id={id}
        onChange={handleOptionChange}
      />
      <CollectionFilterSizeOptionStyled checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </CollectionFilterSizeOptionStyled>
      <CollectionFilterSizeOptionLabel>{id}</CollectionFilterSizeOptionLabel>
    </CollectionFilterSizeOptionContainer>
  );
};

export default CollectionFilterSizeOption;
