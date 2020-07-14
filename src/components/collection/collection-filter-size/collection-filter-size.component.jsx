import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { filterSizes } from "../../../redux/actions/collections.actions";

import {
  selectSectionSizeOptions,
  selectFilteredColors,
  selectFilteredFit,
} from "../../../redux/selectors/collections.selector";

import CollectionFilterSizeOption from "./collection-filter-size-option/collection-filter-size-option.component";

import {
  CollectionFilterContainer,
  CollectionFilterSizeContainer,
  CollectionFilterSizeTitle,
  CollectionFilterSizeOptionContainer,
} from "./collection-filter-size.styles";

const CollectionFilterSize = () => {
  const [sizes, setSizes] = useState([]);
  const dispatch = useDispatch();

  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);
  const sizeOptions = useSelector(
    (state) => selectSectionSizeOptions(state, filteredColors, filteredFit),
    shallowEqual
  );

  useEffect(() => {
    dispatch(filterSizes(sizes));
  }, [sizes]);

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
    <CollectionFilterContainer>
      <CollectionFilterSizeContainer>
        <CollectionFilterSizeTitle>Size</CollectionFilterSizeTitle>
        <CollectionFilterSizeOptionContainer>
          {sizeOptions
            ? sizeOptions.map((sizeItem, index) => (
                <label key={index}>
                  <CollectionFilterSizeOption
                    id={sizeItem}
                    handleChange={handleChange}
                    sizeOptions={sizeOptions}
                  />
                </label>
              ))
            : null}
        </CollectionFilterSizeOptionContainer>
      </CollectionFilterSizeContainer>
    </CollectionFilterContainer>
  );
};

export default CollectionFilterSize;
