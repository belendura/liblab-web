import React, { Fragment, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const CountrySelector = ({ country, handleCountryChange }) => {
  const options = useMemo(() => countryList().getData(), []);

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     borderBottom: "1px solid grey",

  //     color: state.isSelected ? "white" : "grey",
  //     backgroundColor: state.isSelected ? "grey" : "white",
  //     padding: 5,
  //     fontFamily: "Merriweather Sans",
  //     fontSize: 12,
  //     width: 100,
  //   }),
  //   control: () => ({
  //     // none of react-select's styles are passed to <Control />
  //     width: 100,
  //   }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = "opacity 300ms";

  //     return { ...provided, opacity, transition };
  //   },
  // };

  return (
    <Fragment>
      <Select
        id="countries"
        // styles={customStyles}
        options={options}
        value={country}
        onChange={handleCountryChange}
      />
    </Fragment>
  );
};

export default CountrySelector;
