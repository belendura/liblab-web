import React, { useState, useEffect, useRef } from "react";

import CustomButton from "../../../../custom-button";
import CountrySelector from "./components/country-selector";

import {
  Container,
  Form,
  Input,
  Label,
  ButtonContainer,
} from "./client-address.styles";

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.async = "async";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }
  script.src = url;

  document.getElementsByTagName("head")[0].appendChild(script);
};

const ClientAddress = () => {
  const [cityAutoComplete, setCityAutoComplete] = useState(null);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [addressAutoComplete, setAddressAutoComplete] = useState(null);
  const [address, setAddress] = useState("");
  const [code, setCode] = useState("");

  const cityAutoCompleteRef = useRef(null);
  const addressAutoCompleteRef = useRef(null);

  const handleScriptLoad = () => {
    setCityAutoComplete(
      new window.google.maps.places.Autocomplete(cityAutoCompleteRef.current, {
        types: ["(cities)"],
        componentRestrictions: { country: "es" },
      })
    );
    cityAutoCompleteRef.current.focus();
  };

  const handlePlaceSelect = async () => {
    const addressObject = cityAutoComplete.getPlace();
    const address_city = addressObject.formatted_address;
    setCity(address_city);
    fillInAddress(addressObject);
  };

  const fillInAddress = (addressObject) => {
    let address1 = "";
    let postcode = "";

    for (const component of addressObject.address_components) {
      const componentType = component.types[0];

      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name} ${address1}`;
          break;
        }

        case "route": {
          address1 += component.short_name;
          break;
        }

        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }

        case "postal_code_suffix": {
          postcode = `${postcode}-${component.long_name}`;
          break;
        }

        case "administrative_area_level_1": {
          document.querySelector("#state").value = component.short_name;
          break;
        }
        default:
          break;
      }

      // address1Field.value = address1;
      // postalField.value = postcode;
    }
  };

  const handleCityChange = (city) => {
    setCity("");
  };

  const initAutocomplete = () => {
    setUserAddress(
      new window.google.maps.places.Autocomplete(
        addressAutoCompleteRef.current,
        {
          componentRestrictions: { country: ["us", "ca"] },
          fields: ["address_components", "geometry"],
          types: ["address"],
        }
      )
    );
    addressAutoCompleteRef.current.focus();
    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    //autocomplete.addListener("place_changed", fillInAddress);
  };

  const handleAddressChange = (address) => {
    // setCity("");
  };

  const handleCountryChange = (country, event) => {
    setCountry(country);
    setCity("");
    if (cityAutoComplete)
      cityAutoComplete.setComponentRestrictions({
        country:
          country.value === undefined ? "us" : country.value.toLowerCase(),
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // dispatch(updateUserStart(userData));
  };

  useEffect(() => {
    if (!window.google?.maps?.places) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_FIREBASE_API_KEY}&libraries=places`,
        () => handleScriptLoad()
      );
    } else {
      handleScriptLoad();
    }
    const body = document.getElementsByTagName("body")[0];
    body.style.position = "fixed";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = "unset";
      body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (cityAutoComplete) {
      cityAutoComplete.setFields(["address_components", "formatted_address"]);
      cityAutoComplete.addListener("place_changed", () => handlePlaceSelect());
    }
  }, [cityAutoComplete]);

  useEffect(() => {
    if (cityAutoComplete) {
      cityAutoComplete.setFields(["address_components", "formatted_address"]);
      cityAutoComplete.addListener("place_changed", () => handlePlaceSelect());
    }
  }, [cityAutoComplete]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <CountrySelector
          country={country}
          handleCountryChange={handleCountryChange}
        />
        <Label for="city">City*</Label>
        <Input
          id="city"
          ref={cityAutoCompleteRef}
          onChange={handleCityChange}
          placeholder="Enter a city"
          type="text"
          name="city"
          value={city}
          label="city"
          required
        />
        <Label for="address">*Label</Label>
        <Input
          id="address"
          ref={addressAutoCompleteRef}
          onChange={handleAddressChange}
          placeholder="Enter address"
          type="text"
          name="address"
          value={address}
          label="address"
          required
        />
        <Label for="state">State/Province*</Label>
        <Input id="state" name="state" readonly required />
        <ButtonContainer>
          <CustomButton color="standard">ACCEPT</CustomButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default ClientAddress;
