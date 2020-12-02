import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  // selectSectionTypeOptions,
  selectFilteredSizes,
  selectFilteredFit,
  selectFilteredColors,
} from "../../../redux/selectors/collections.selectors";
// import { filterType } from "../../../redux/actions/collections.actions";

import CollectionFilterTypeOption from "./collection-filter-type-option/collection-filter-type-option.component";

import {
  Container,
  Title,
  OptionsContainer,
} from "./collection-filter-type.styles";

const CollectionFilterType = () => {
  const [types, setTypes] = useState([]);
  const dispatch = useDispatch();

  const filteredSizes = useSelector(selectFilteredSizes, shallowEqual);

  const filteredFit = useSelector(selectFilteredFit, shallowEqual);
  const filteredColors = useSelector(selectFilteredColors, shallowEqual);

  // const typeOptions = useSelector(
  //   (state) =>
  //     selectSectionTypeOptions(
  //       state,
  //       filteredColors,
  //       filteredSizes,
  //       filteredFit
  //     ),
  //   shallowEqual
  // );

  useEffect(() => {
    dispatch(filterTypes(types));
  }, [types]);

  const handleChange = (event) => {
    const { checked, id } = event.target;
    if (checked && !types.includes(id)) {
      setTypes([...types, id]);
    } else if (!checked && types.includes(id)) {
      const typesFiltered = types.filter((item) => item !== id);
      setTypes(typesFiltered);
    }
  };

  return (
    <Container>
      <Title>Type</Title>
      <OptionsContainer>
        {/* {typeOptions
          ? typeOptions.map((typeItem, index) => {
              return (
                <label key={index}>
                  <CollectionFilterTypeOption
                    id={typeItem}
                    handleChange={handleChange}
                  />
                </label>
              );
            })
          : null} */}
      </OptionsContainer>
    </Container>
  );
};

export default CollectionFilterType;
