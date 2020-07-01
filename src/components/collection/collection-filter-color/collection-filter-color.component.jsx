import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  selectSectionColorOptions,
  selectFilteredColors,
  selectFilteredSizes,
  selectFilteredFit,
} from "../../../redux/selectors/collections.selector";
import { filterColors } from "../../../redux/actions/collections.actions";

import CollectionFilterColorOption from "./collection-filter-color-option/collection-filter-color-option.component";

import {
  CollectionFilterColorContainer,
  CollectionFilterColorTitle,
  CollectionFilterColorOptionContainer,
} from "./collection-filter-color.styles";

const CollectionFilterColor = () => {
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();

  const filteredColors = useSelector(selectFilteredColors, shallowEqual);
  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);
  const filteredFit = useSelector(selectFilteredFit, shallowEqual);
  const colorOptions = useSelector(
    (state) => selectSectionColorOptions(state, filteredSizes, filteredFit),
    shallowEqual
  );

  useEffect(() => {
    dispatch(filterColors(colors));
  }, [colors]);

  const handleChange = (event) => {
    const { checked, id } = event.target;
    if (checked && !colors.includes(id)) {
      setColors([...colors, id]);
    } else if (!checked && colors.includes(id)) {
      const colorsFiltered = colors.filter((item) => item !== id);
      setColors(colorsFiltered);
    }
  };

  return (
    <CollectionFilterColorContainer>
      {console.log("filteredColors", filteredColors)}
      <CollectionFilterColorTitle>Color</CollectionFilterColorTitle>
      <CollectionFilterColorOptionContainer>
        {colorOptions
          ? colorOptions.map((colorItem, index) => {
              return (
                <label key={colorItem.code}>
                  <CollectionFilterColorOption
                    id={colorItem}
                    handleChange={handleChange}
                    colorOptions={colorOptions}
                  />
                </label>
              );
            })
          : null}
      </CollectionFilterColorOptionContainer>
    </CollectionFilterColorContainer>
  );
};

export default CollectionFilterColor;