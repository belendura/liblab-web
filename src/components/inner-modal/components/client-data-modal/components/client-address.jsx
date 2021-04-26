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
  const [country, setCountry] = useState("");
  const [addressAutoComplete, setAddressAutoComplete] = useState(null);
  const [userAddress, setUserAddress] = useState({
    shippingAddress: "",
    address2: "",
    city: "",
    state: "",
    postCode: "",
  });

  const { shippingAddress, address2, city, state, postCode } = userAddress;

  const addressAutoCompleteRef = useRef(null);
  const address2Ref = useRef(null);

  const handleScriptLoad = () => {
    setAddressAutoComplete(
      new window.google.maps.places.Autocomplete(
        addressAutoCompleteRef.current,
        {
          componentRestrictions: { country: "es" },
          fields: ["address_components", "geometry"],
          types: ["address"],
        }
      )
    );
  };

  const handlePlaceSelect = async () => {
    const addressObject = addressAutoComplete.getPlace();
    console.log("addressObject", addressObject);
    fillInAddress(addressObject);
  };

  const fillInAddress = (addressObject) => {
    let address1 = "";
    const postcode = "";

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
          document.querySelector(
            "#postCode"
          ).value = `${component.long_name}${postcode}`;
          break;
        }

        case "postal_code_suffix": {
          document.querySelector(
            "#postCode"
          ).value = `${postcode}-${component.long_name}`;
          break;
        }
        case "locality":
          document.querySelector("#city").value = component.long_name;
          break;

        case "administrative_area_level_2": {
          document.querySelector("#state").value = component.short_name;
          break;
        }
        default:
          break;
      }

      addressAutoCompleteRef.current.value = address1;
      address2Ref.current.focus();
    }
  };

  const handleChange = (event) => {
    console.log("event", event.target);
    const { name, value } = event.target;
    setUserAddress({ ...userAddress, [name]: value });
  };

  // const handleAddressChange = (address) => {
  //   // setAddress("");
  //   console.log("address change");
  // };

  // const handlePostCodeChange = (postCode) => {
  //   // setPostCode("");
  //   console.log("post code change");
  // };

  const handleCountryChange = (country, event) => {
    setCountry(country);
    if (addressAutoComplete) {
      addressAutoComplete.setComponentRestrictions({
        country:
          country.value === undefined ? "es" : country.value.toLowerCase(),
      });
    }
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
    if (addressAutoComplete) {
      addressAutoComplete.setFields([
        "address_components",
        "formatted_address",
      ]);
      addressAutoComplete.addListener("place_changed", () =>
        handlePlaceSelect()
      );
      addressAutoCompleteRef.current.focus();
    }
  }, [addressAutoComplete]);

  return (
    <Container>
      <Form onSubmit={handleSubmit} method="get" autocomplete="off">
        <CountrySelector
          country={country}
          handleCountryChange={handleCountryChange}
        />
        <Label htmlFor="shippingAddress">Deliver to*</Label>
        <Input
          id="shippingAddress"
          ref={addressAutoCompleteRef}
          placeholder="Enter address"
          type="text"
          name="shippingAddress"
          value={shippingAddress}
          onChange={handleChange}
          onKeyPress="return event.keyCode != 13"
          autocomplete="off"
          required
        />
        <Label htmlFor="address2">Apartment, suite or floor</Label>
        <Input
          id="address2"
          ref={address2Ref}
          placeholder="Enter apartment, floor..."
          type="text"
          name="address2"
          value={address2}
          onChange={handleChange}
        />

        <Label>City*</Label>
        <Input
          id="city"
          placeholder="Enter a city"
          type="text"
          name="city"
          value={city}
          onChange={handleChange}
          required
        />
        <Label htmlFor="postal_code">Postal code*</Label>
        <Input
          id="postCode"
          placeholder="Enter a post code"
          type="text"
          name="postCode"
          value={postCode}
          onChange={handleChange}
          required
        />
        <Label>State/Province*</Label>
        <Input
          id="state"
          placeholder="Enter a state/province"
          type="text"
          name="state"
          value={state}
          onChange={handleChange}
          required
        />
        <ButtonContainer>
          <CustomButton color="standard">ACCEPT</CustomButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default ClientAddress;
