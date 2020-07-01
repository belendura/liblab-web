import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { filterFit } from "../../../redux/actions/collections.actions";

import {
  selectSectionFitOptions,
  selectFilteredColors,
  selectFilteredSizes,
} from "../../../redux/selectors/collections.selector";

import CollectionFilterFitOption from "./collection-filter-fit-option/collection-filter-fit-option.component";

import {
  CollectionFilterFitContainer,
  CollectionFilterFitTitle,
  CollectionFilterFitOptionContainer,
} from "./collection-filter-fit.styles";

const CollectionFilterFit = () => {
  const [fit, setFit] = useState([]);
  const dispatch = useDispatch();

  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);

  const fitOptions = useSelector(
    (state) => selectSectionFitOptions(state, filteredColors, filteredSizes),
    shallowEqual
  );

  useEffect(() => {
    dispatch(filterFit(fit));
  }, [fit]);

  const handleChange = (event) => {
    const { checked, id } = event.target;
    if (checked && !fit.includes(id)) {
      setFit([...fit, id]);
    } else if (!checked && fit.includes(id)) {
      const fitFiltered = fit.filter((item) => item !== id);
      setFit(fitFiltered);
    }
  };

  return (
    <CollectionFilterFitContainer>
      <CollectionFilterFitTitle>Fit</CollectionFilterFitTitle>
      <CollectionFilterFitOptionContainer>
        {fitOptions
          ? fitOptions.map((fitItem, index) => (
              <label key={index}>
                <CollectionFilterFitOption
                  key={index}
                  id={fitItem}
                  handleChange={handleChange}
                />
              </label>
            ))
          : null}
      </CollectionFilterFitOptionContainer>
    </CollectionFilterFitContainer>
  );
};

export default CollectionFilterFit;
