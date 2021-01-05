import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  selectSectionColorOptions,
  selectFilteredSizes,
  selectFilteredFit,
} from "../../../redux/selectors/collections.selectors";
import { filterColors } from "../../../redux/actions/collections.actions";

import CollectionFilterColorOption from "./collection-filter-color-option/collection-filter-color-option.component";

import {
  Container,
  Title,
  OptionsContainer,
} from "./collection-filter-color.styles";

const CollectionFilterColor = ({condition}) => {
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();

  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);

  const filteredFit = useSelector(selectFilteredFit, shallowEqual);

  const colorOptions = useSelector(
    (state) => selectSectionColorOptions(state, condition, filteredSizes, filteredFit),
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
    <Container>
      <Title>Color</Title>
      <OptionsContainer>
        {colorOptions
          ? colorOptions.map((colorItem, index) => {
              return (
                <label key={index}>
                  <CollectionFilterColorOption
                    id={colorItem}
                    handleChange={handleChange}
                  />
                </label>
              );
            })
          : null}
      </OptionsContainer>
    </Container>
  );
};

export default CollectionFilterColor;
