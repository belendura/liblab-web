import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { selectSectionColors } from "../../../redux/selectors/collections.selector";

import CollectionFilterColorOption from "./collection-filter-color-option/collection-filter-color-option.component";

import {
  CollectionFilterColorContainer,
  CollectionFilterColorTitle,
  CollectionFilterColorOptionContainer,
} from "./collection-filter-color.styles";

const CollectionFilterColor = () => {
  const [colors, setColors] = useState([]);
  const colorOptions = useSelector(selectSectionColors, shallowEqual);

  // useEffect(() => {
  //   console.log("colors", colors);
  // }, [colors]);

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
      <CollectionFilterColorTitle>Color</CollectionFilterColorTitle>
      <CollectionFilterColorOptionContainer>
        {colorOptions
          ? colorOptions.map((colorItem, index) => (
              <label>
                <CollectionFilterColorOption
                  key={index}
                  id={colorItem}
                  handleChange={handleChange}
                />
              </label>
            ))
          : null}
      </CollectionFilterColorOptionContainer>
    </CollectionFilterColorContainer>
  );
};

export default CollectionFilterColor;
