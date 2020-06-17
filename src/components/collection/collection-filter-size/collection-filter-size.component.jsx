import React, { useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { selectSectionSizes } from "../../../redux/selectors/collections.selector";

import CollectionFilterSizeOption from "./collection-filter-size-option/collection-filter-size-option.component";

import {
  CollectionFilterSizeContainer,
  CollectionFilterSizeTitle,
  CollectionFilterSizeOptionContainer,
} from "./collection-filter-size.styles";

const CollectionFilterSize = () => {
  const [sizes, setSizes] = useState([]);

  const sizeOptions = useSelector(selectSectionSizes, shallowEqual);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { checked, id } = event.target;
    if (checked && !sizes.includes(id)) {
      setSizes([...sizes, id]);
    } else if (!checked && sizes.includes(id)) {
      const sizesFiltered = sizes.filter((item) => item !== id);
      setSizes(sizesFiltered);
    }
  };

  return (
    <CollectionFilterSizeContainer>
      {console.log("sizes", sizes)}
      <CollectionFilterSizeTitle>Size</CollectionFilterSizeTitle>
      <CollectionFilterSizeOptionContainer>
        {sizeOptions
          ? sizeOptions.map((sizeItem, index) => (
              <label>
                <CollectionFilterSizeOption
                  key={index}
                  id={sizeItem}
                  handleChange={handleChange}
                />
              </label>
            ))
          : null}
      </CollectionFilterSizeOptionContainer>
    </CollectionFilterSizeContainer>
  );
};

export default CollectionFilterSize;
