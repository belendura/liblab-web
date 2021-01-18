import React, { useState } from "react";
import { useDispatch } from "react-redux";

// import { setDeliveryMode } from "../../../redux/actions/cart.actions";

import {
  Container,
  Title,
  Form,
  ModeContainer,
  Label,
  Input,
  Price,
} from "./shipping-mode.styles";

const ShippingMode = () => {
  const [deliveryMode, setDeliveryMode] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setDeliveryMode(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setDeliveryMode());
  };

  return (
    <Container>
      <Title>Select Shipping Mode</Title>
      <Form onSubmit={handleSubmit}>
      <ModeContainer>
        <Input
          onChange={handleChange}
          placeholder="Collect from Store"
          type="radio"
          name="delivery"
          value="store"
          required
        />
           <Label>Collect from Store</Label>
           <Price>Free</Price>
        </ModeContainer>
        <ModeContainer>
           <Input
          onChange={handleChange}
          placeholder="Home delivery"
          type="radio"
          name="delivery"
          value="home"
          required
        />
            <Label>Home delivery</Label>
            <Price>Free</Price>
        </ModeContainer>
        <ModeContainer>
          <Input
          onChange={handleChange}
          placeholder="Urgent"
          type="radio"
          name="delivery"
          value="urgent"
          id="Urgent"
          required
        />
           <Label>Urgent</Label>
           <Price>3.95 EUR</Price>
        </ModeContainer>
      </Form>
   
    </Container>
  );
};

export default ShippingMode;
